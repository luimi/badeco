# Gemini

## Requerimientos

- Cuenta de google
- Api key de AiStudio

## Implementación

### NodeJS

> Generar contenido

```javascript
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI("AIzaSy...");
const modelQA = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
try {
    const result = await modelQA.generateContent(prompt);
    const response = await result.response;
    return response.text();
} catch (error) {
    console.error("Error", error);
}
```

> Pre-Entrenamiento (RAG)

```javascript
const modelEmbedding = genAI.getGenerativeModel({ model: "text-embedding-004" });
let knowledgeBase = [];
async function initializeKnowledgeBase() {
    const documents = [
        {
            id: "doc1",
            text: "Texto a utilizar"
        },...
    ];

    for (const doc of documents) {
        const result = await modelEmbedding.embedContent(doc.text);
        knowledgeBase.push({
            id: doc.id,
            text: doc.text,
            embedding: result.embedding.values
        });
    }
}
function cosineSimilarity(vecA, vecB) {
    let dotProduct = 0;
    let magnitudeA = 0;
    let magnitudeB = 0;

    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        magnitudeA += vecA[i] * vecA[i];
        magnitudeB += vecB[i] * vecB[i];
    }

    magnitudeA = Math.sqrt(magnitudeA);
    magnitudeB = Math.sqrt(magnitudeB);

    if (magnitudeA === 0 || magnitudeB === 0) {
        return 0;
    }

    return dotProduct / (magnitudeA * magnitudeB);
}
async function findRelevantDocuments(queryEmbedding, topK = 2) {
    const similarities = [];
    for (const doc of knowledgeBase) {
        const similarity = cosineSimilarity(queryEmbedding, doc.embedding);
        similarities.push({ text: doc.text, similarity: similarity });
    }
    similarities.sort((a, b) => b.similarity - a.similarity);
    return similarities.slice(0, topK).map(item => item.text);
}
async function askGeminiWithContext(userQuestion) {
    const queryEmbeddingResult = await modelEmbedding.embedContent(userQuestion);
    const queryEmbedding = queryEmbeddingResult.embedding.values;
    const relevantDocs = await findRelevantDocuments(queryEmbedding, 2);
    const contextForGemini = relevantDocs.join('\n\n');
    const prompt = `Basándote EXCLUSIVAMENTE en la siguiente información, responde a la pregunta.
    Si la información proporcionada no es suficiente para responder, di 'No tengo suficiente información en este momento.'.

    Información proporcionada:
    ${contextForGemini}

    Pregunta:
    ${userQuestion}`;
    try {
        const result = await modelQA.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Error", error);
    }
}
```

### JavaScript

> Generar contenido

```javascript
const prompt = "genera en javascript una funcion que..."
const generateContent = async (mimeType: string, fileUri: string) => {
    return await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GOOGLE_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        { text: prompt },
                    ],
                },
            ],
        }),
    });
}
```

> Generar contenido usando archivo

```javascript
const prompt = "Con base este archivo extrae..."
const generateWithFile = async (event: any) => {
    const selectedFile = event.target.files[0];
    const mimeType = selectedFile.type;
    const numBytes = selectedFile.size;
    const displayName = selectedFile.name;

    const startUploadResponse = await startUpload(numBytes, mimeType, displayName)
    if (!startUploadResponse.ok) return null;
    const uploadUrl = startUploadResponse.headers.get('X-Goog-Upload-URL');
    if (!uploadUrl) return null;
    const fileBuffer = await selectedFile.arrayBuffer();
    const uploadResponse = await upload(uploadUrl, numBytes, mimeType, fileBuffer)
    if (!uploadResponse.ok) return null;
    const fileInfo = await uploadResponse.json();
    const fileUri = fileInfo?.file?.uri;
    if (!fileUri) return null;
    const generateContentResponse = await generateContent(mimeType, fileUri)
    if (!generateContentResponse.ok) return null;
    const responseJson = await generateContentResponse.json();
    const description = responseJson?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!description) null;
    await deleteUpload(fileInfo)
}

const startUpload = async (numBytes: number, mimeType: string, displayName: string) => {
    return await fetch(`https://generativelanguage.googleapis.com/upload/v1beta/files?key=${GOOGLE_API_KEY}`, {
        method: 'POST',
        headers: {
            'X-Goog-Upload-Protocol': 'resumable',
            'X-Goog-Upload-Command': 'start',
            'X-Goog-Upload-Header-Content-Length': numBytes.toString(),
            'X-Goog-Upload-Header-Content-Type': mimeType,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            file: {
                display_name: displayName,
            },
        }),
    });
}

const upload = async (
    uploadUrl: string,
    numBytes: number,
    mimeType: string,
    fileBuffer: ArrayBuffer
) => {
    return await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
            'Content-Length': numBytes.toString(),
            'X-Goog-Upload-Offset': '0',
            'X-Goog-Upload-Command': 'upload, finalize',
            'Content-Type': mimeType,
        },
        body: fileBuffer,
    });
}

const generateContent = async (mimeType: string, fileUri: string) => {
    return await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GOOGLE_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        { text: prompt },
                        { file_data: { mime_type: mimeType, file_uri: fileUri } },
                    ],
                },
            ],
        }),
    });
}

const deleteUpload = async (fileInfo: any) => {
    await fetch(`https://generativelanguage.googleapis.com/v1beta/${fileInfo.file.name}?key=${GOOGLE_API_KEY}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
```