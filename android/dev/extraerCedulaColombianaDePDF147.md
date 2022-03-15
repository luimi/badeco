# Extraer Cedula Colombiana De PDF147

## Requerimientos
- Proyecto Android Studio

## Proceso

```kotlin
fun getDocumentData(result: String){
    val data = result.replace("[^A-Za-z0-9+]+".toRegex()," ").split(" ")
    var indexMod = 0
    var idNumber = ""
    var lastName1 = ""
    if ("[A-Z]".toRegex().containsMatchIn(data[3])) {
        indexMod = - 1
        val idString = data[3].replace("[A-Z]".toRegex(), "")
        idNumber = idString.substring(8, idString.length)
        lastName1 = data[3].replace("[0-9]".toRegex(), "")
    } else {
        idNumber = data[4].replace("[A-Z]".toRegex(), "")
        lastName1 = data[4].replace("[0-9]".toRegex(), "")
    }

    val lastName2 = data[5 + indexMod].replace("/\\W/g".toRegex(), "")
    val firstName1 = data[6 + indexMod].replace("/\\W/g".toRegex(), "")
    var middleName = ""

    if (!("[0-9]".toRegex().containsMatchIn(data[7 + indexMod]))) {
        middleName = data[7 + indexMod]
    }

    val extraData = data[if(middleName != "") 8 + indexMod else 7 + indexMod]

    val gender = if(extraData.contains("M")) "MALE" else "FEMALE"
    val birthDate = extraData.substring(2, 10)
    val bloodType = extraData.substring(extraData.length - 2)
    Log.e("DOCUMENTO", " data: ${idNumber} ${firstName1} ${middleName} ${lastName1} ${lastName2} ${gender} ${birthDate} ${bloodType}")
}

```