export const generalIcons = [
    "alert",
    "arrow-left",
    "arrow-right",
    "bell",
    "chat",
    "check",
    "checkbox",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "close",
    "exit",
    "filter",
    "info",
    "locked",
    "minus",
    "plus",
    "search",
    "select-marker-disabled",
    "select-marker",
    "switch",
    "target",
    "unlocked",
    "up-down",
    "validation-error",
    "validation-success"
] as const
export type GeneralIcon = typeof generalIcons[number];

export const classificationIcons = [ "a", "b", "c", "d", "e" ] as const
export type ClassificationIcon = typeof classificationIcons[number];

export const facadeIcons = [ "achter", "inpandig", "links", "rechts", "voor" ] as const
export type FacadeIcon = typeof facadeIcons[number];

export const foundationIcons = [ "betonnen-palen", "houten-palen-oplanger", "houten-palen", "niet-onderheid" ] as const
export type FoundationIcon = typeof foundationIcons[number];
    
export const fundermapsIcons = [
    "alert",
    "align-front",
    "apps",
    "bell",
    "building",
    "calendar",
    "chat",
    "circle-check",
    "circle-minus",
    "circle-plus",
    "email",
    "file-foundation",
    "file-pdf",
    "file-report",
    "foundation",
    "graph",
    "home-info",
    "home",
    "image",
    "info",
    "lock",
    "map",
    "pin",
    "report",
    "reports",
    "scan",
    "search",
    "settings",
    "signal",
    "target",
    "times",
    "tools",
    "trash",
    "wrench"
] as const
export type FundermapsIcon = typeof fundermapsIcons[number];
    
export const iconSource = ['general', 'classification', 'facade', 'foundation', 'fundermaps'] ;
    
export const iconsMap = {
    general: generalIcons,
    classification: classificationIcons,
    facade: facadeIcons,
    foundation: foundationIcons,
    fundermaps: fundermapsIcons
}
//give me a type that matches the keys of the IconType object to the values of the types above
export type IconMap = {
    general: GeneralIcon;
    classification: ClassificationIcon;
    facade: FacadeIcon;
    foundation: FoundationIcon;
    fundermaps: FundermapsIcon;
};