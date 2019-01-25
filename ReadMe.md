# Architect
For React Native projects, I break the mobile app to separate systems. My rule for breaking is the shared store. Each system has shared store and absolutly, related screens. Each subsystem contains:
screens folder, action.js, reducer.js, type.js.
Inside screen folders are subfolders. Each subfolder is only for one screen (route or scene) and has: layout.js (dump component) and container.js(smart component).
container is responsible for logics and dump is only for showing the component.
# Guideline Questions
3rd-party components ,**like map**, I  wrapped that component in my **custom component**. In this way, I can change it easily with another one. And the **geocoder** is in another function. In the hole project I use my function. I don't expose my original geocoder. I only get values and the return the results. So, I can change my geocoder third-party whenever I want. 

Using `try-catch` for handling the errors.

I don't use hard code. Configuration values, strings, colors and so on are in an appropriate file. so changing them in their file and hole the app will get the new one.

# Testing
For testing, I used [detox](https://github.com/wix/Detox/). 
