export interface Stat           { value:string; label:string }
export interface Service        { icon:string; title:string; desc:string }
export interface WorkExperience { role:string; company:string; period:string; current?:boolean; bullets:string[] }
export interface EducationEntry { degree:string; institution:string; period:string }
export interface Certification  { name:string; issuer:string }
export interface SkillGroup     { cat:string; items:string[] }
export interface Project        { num:string; title:string; desc:string; tags:string[]; accent:string }
