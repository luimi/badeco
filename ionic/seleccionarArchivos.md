# Selección nativa de archivos en Android

## Requerimientos

- Proyecto IONIC Capacitor
- Plataforma Android

## Implementación

Modificar el archivo en `/node_modules/@capacitor/android/capacitor/src/main/java/com/getcapacitor/BridgeWebChromeClient.java` y agregar este metodo
```java
@SuppressLint("QueryPermissionsNeeded")
  private void showFilePickerNew(final ValueCallback<Uri[]> filePathCallback, FileChooserParams fileChooserParams) {

    // **** Intent de camara
    Intent camera = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
    if (camera.resolveActivity(bridge.getActivity().getPackageManager()) == null) {
      return;
    }
    final Uri imageFileUri;
    try {
      imageFileUri = createImageFileUri();
    } catch (Exception ex) {
      Logger.error("Unable to create temporary media capture file: " + ex.getMessage());
      return;
    }
    camera.putExtra(MediaStore.EXTRA_OUTPUT, imageFileUri);

    // **** Intent de pick
    Intent picker = new Intent(Intent.ACTION_PICK);
    picker.setType("image/*");

    // **** Intent de filechooser
    Intent filechooser = fileChooserParams.createIntent();
    filechooser.setType("image/*");

    try {
      activityListener = activityResult -> {
        Uri[] result;
        Intent resultIntent = activityResult.getData();
        if (activityResult.getResultCode() == Activity.RESULT_OK && resultIntent != null) {
          ClipData clipData = resultIntent.getClipData();
          Uri uri = resultIntent.getData();
          if (clipData != null || uri != null) {
            result = new Uri[]{clipData != null ? clipData.getItemAt(0).getUri() : uri};
          } else {
            result = FileChooserParams.parseResult(activityResult.getResultCode(), resultIntent);
          }
        } else if(activityResult.getResultCode() == Activity.RESULT_OK) {
          result = new Uri[]{imageFileUri};
        } else {
          result = FileChooserParams.parseResult(activityResult.getResultCode(), resultIntent);
        }
        filePathCallback.onReceiveValue(result);
      };
      Intent chooser = Intent.createChooser(picker, " ");
      chooser.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Intent[]{camera, filechooser});
      activityLauncher.launch(chooser);
    } catch (ActivityNotFoundException e) {
      filePathCallback.onReceiveValue(null);
    }
  }
```

Modificar las lineas 339 y 367, cambiando el metodo que llaman por `showFilePickerNew`