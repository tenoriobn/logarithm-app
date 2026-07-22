'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import SplitText from 'gsap/SplitText';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin, Observer);

export { gsap, useGSAP, ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin, Observer };
