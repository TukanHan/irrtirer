
import '@angular/compiler';
import '@analogjs/vitest-angular/setup-zone';
import 'vitest-canvas-mock';

import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { getTestBed } from '@angular/core/testing';

getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting()
);
