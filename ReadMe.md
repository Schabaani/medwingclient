# Architect
For React Native projects, I break the mobile app to separate systems. My rule for breaking is the shared store. Each system has shared store and absolutly, related screens. Each subsystem contains:
screens folder, action.js, reducer.js, type.js.
Inside screen folders are subfolders. Each subfolder is only for one screen (route or scene) and has: layout.js (dump component) and container.js(smart component).
container is responsible for logics and dump is only for showing the componet.
