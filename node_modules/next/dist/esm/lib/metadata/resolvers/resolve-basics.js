import { resolveAsArrayOrUndefined } from "../generate/utils";
import { resolveUrl, resolveUrlValuesOfObject } from "./resolve-url";
import { ViewPortKeys } from "../constants";
export const resolveThemeColor = (themeColor)=>{
    var ref;
    if (!themeColor) return null;
    const themeColorDescriptors = [];
    (ref = resolveAsArrayOrUndefined(themeColor)) == null ? void 0 : ref.forEach((descriptor)=>{
        if (typeof descriptor === "string") themeColorDescriptors.push({
            color: descriptor
        });
        else if (typeof descriptor === "object") themeColorDescriptors.push({
            color: descriptor.color,
            media: descriptor.media
        });
    });
    return themeColorDescriptors;
};
export const resolveViewport = (viewport)=>{
    let resolved = null;
    if (typeof viewport === "string") {
        resolved = viewport;
    } else if (viewport) {
        resolved = "";
        for(const viewportKey_ in ViewPortKeys){
            const viewportKey = viewportKey_;
            if (viewport[viewportKey]) {
                if (resolved) resolved += ", ";
                resolved += `${ViewPortKeys[viewportKey]}=${viewport[viewportKey]}`;
            }
        }
    }
    return resolved;
};
export const resolveAlternates = (alternates, metadataBase)=>{
    if (!alternates) return null;
    const result = {
        canonical: metadataBase ? resolveUrl(alternates.canonical, metadataBase) : alternates.canonical || null,
        languages: null,
        media: null,
        types: null
    };
    const { languages , media , types  } = alternates;
    result.languages = resolveUrlValuesOfObject(languages, metadataBase);
    result.media = resolveUrlValuesOfObject(media, metadataBase);
    result.types = resolveUrlValuesOfObject(types, metadataBase);
    return result;
};
const robotsKeys = [
    "noarchive",
    "nosnippet",
    "noimageindex",
    "nocache",
    "notranslate",
    "indexifembedded",
    "nositelinkssearchbox",
    "unavailable_after",
    "max-video-preview",
    "max-image-preview",
    "max-snippet", 
];
const resolveRobotsValue = (robots)=>{
    if (!robots) return null;
    if (typeof robots === "string") return robots;
    const values = [];
    if (robots.index) values.push("index");
    else if (typeof robots.index === "boolean") values.push("noindex");
    if (robots.follow) values.push("follow");
    else if (typeof robots.follow === "boolean") values.push("nofollow");
    for (const key of robotsKeys){
        const value = robots[key];
        if (typeof value !== "undefined" && value !== false) {
            values.push(typeof value === "boolean" ? key : `${key}:${value}`);
        }
    }
    return values.join(", ");
};
export const resolveRobots = (robots)=>{
    if (!robots) return null;
    return {
        basic: resolveRobotsValue(robots),
        googleBot: typeof robots !== "string" ? resolveRobotsValue(robots.googleBot) : null
    };
};
const VerificationKeys = [
    "google",
    "yahoo",
    "yandex",
    "me",
    "other"
];
export const resolveVerification = (verification)=>{
    if (!verification) return null;
    const res = {};
    for (const key of VerificationKeys){
        const value = verification[key];
        if (value) {
            if (key === "other") {
                res.other = {};
                for(const otherKey in verification.other){
                    const otherValue = resolveAsArrayOrUndefined(verification.other[otherKey]);
                    if (otherValue) res.other[otherKey] = otherValue;
                }
            } else res[key] = resolveAsArrayOrUndefined(value);
        }
    }
    return res;
};
export const resolveAppleWebApp = (appWebApp)=>{
    var ref;
    if (!appWebApp) return null;
    if (appWebApp === true) {
        return {
            capable: true
        };
    }
    const startupImages = appWebApp.startupImage ? (ref = resolveAsArrayOrUndefined(appWebApp.startupImage)) == null ? void 0 : ref.map((item)=>typeof item === "string" ? {
            url: item
        } : item) : null;
    return {
        capable: "capable" in appWebApp ? !!appWebApp.capable : true,
        title: appWebApp.title || null,
        startupImage: startupImages,
        statusBarStyle: appWebApp.statusBarStyle || "default"
    };
};
export const resolveAppLinks = (appLinks)=>{
    if (!appLinks) return null;
    for(const key in appLinks){
        // @ts-ignore // TODO: type infer
        appLinks[key] = resolveAsArrayOrUndefined(appLinks[key]);
    }
    return appLinks;
};

//# sourceMappingURL=resolve-basics.js.map