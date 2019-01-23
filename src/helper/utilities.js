export function clone(obj) {
    let copy;

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    if (obj instanceof Map) {
        return new Map(clone(Array.from(obj)));
    }

    if (obj instanceof Array) {
        copy = [];
        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    if (obj instanceof Object) {
        copy = {};
        for (const attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = clone(obj[attr]);
            }
        }
        return copy;
    }
    throw new Error('Unable to copy object! Its type isn\'t supported');
}

export function removeKey(obj, deleteKey) {
    let cloned = clone(obj);
    for (let i = 0; i < cloned.length; i++) {
        if (deleteKey === cloned[i].uuid) {
            cloned.splice(i, 1);
            break;
        }
    }
    return cloned;
}

export function editPoint(coordinates, edit, replace) {
    for (let i = 0; i < coordinates.length; i++) {
        if (coordinates[i].uuid === edit.uuid) {
            coordinates[i].title = replace.name;
            coordinates[i].point = {latitude: replace.geometry[0], longitude: replace.geometry[1]};
            break;
        }
    }
    return coordinates
}