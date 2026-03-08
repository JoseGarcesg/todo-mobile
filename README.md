# Todo-Mobile App

Aplicación **To-Do List** desarrollada con **Ionic 7 + Angular Standalone + Cordova**, que permite gestionar tareas, categorizarlas, filtrarlas y marcar tareas completadas. Integra **Firebase Remote Config** para feature flags y está preparada para compilarse en **Android (APK)** e **iOS (IPA)**.

---

## Funcionalidades

- Crear, editar y eliminar tareas.
- Marcar tareas como completadas.
- Asignar categoría a cada tarea.
- Filtrar tareas por categoría o mostrar tareas sin categoría.
- Separación visual de tareas pendientes y completadas.
- Crear, editar y eliminar categorías.
- Contador de tareas por categoría.
- Integración con Firebase Remote Config para feature flags.

---

## Requisitos Previos

- Node.js >= 20  
- npm >= 10  
- Ionic CLI >= 7  
- Cordova CLI >= 13  
- Java JDK >= 17  
- Android SDK (con cmdline-tools)  
- Gradle >= 8 agregado al PATH  
- Xcode (para iOS, en macOS)

---

## Instalación y Ejecución

1. Clonar repositorio:

```bash
git clone https://github.com/JoseGarcesg/todo-mobile.git
cd todo-mobile
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar en navegador:

```bash
ionic serve
```

---

## Compilación Android

1. Agregar plataforma Android:

```bash
cordova platform add android
```

2. Construir APK release:

```bash
cordova build android --release
```

> APK generado en: `platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk`
> descargar de https://github.com/JoseGarcesg/todo-mobile/blob/develop/app-release-unsigned.apk

---

## Compilación iOS

> Solo en macOS con Xcode:

```bash
cordova platform add ios
cordova build ios --release
```

> IPA generado en: `platforms/ios/build/device/TodoMobile.ipa`

---

## Firebase Remote Config

1. Crear proyecto en [Firebase Console](https://console.firebase.google.com/)  
2. Descargar `google-services.json` (Android) y `GoogleService-Info.plist` (iOS)  
3. Implementar feature flags en la app para activar/desactivar funcionalidades.

---

## Buenas prácticas

- Uso de Angular Standalone Components.  
- Separación de lógica en Services (`TaskService`, `CategoryService`).  
- Filtrado dinámico y separación de tareas pendientes/completadas.  
- Manejo eficiente de categorías vacías.

---

## Licencia

MIT License

