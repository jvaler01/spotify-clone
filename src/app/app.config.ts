import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import {provideAnimations} from '@angular/platform-browser/animations';
import { BrowserModule } from "@angular/platform-browser";
import { provideRouter, withComponentInputBinding, withViewTransitions } from "@angular/router";
import { routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()), provideAnimations(),
    importProvidersFrom(BrowserModule),
    provideHttpClient(),
  ]
}