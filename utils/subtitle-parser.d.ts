import { Subtitle } from '../';
declare const subtitleParser: (subitleUrl: string, textContent: string) => Promise<Subtitle[]>;
export default subtitleParser;
