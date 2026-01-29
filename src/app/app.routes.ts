import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PrivacyPolicyComponent } from './features/legal/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './features/legal/legal-notice/legal-notice.component';
import { CookiesPolicyComponent } from './features/legal/cookies-policy/cookies-policy.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'politica-privacidad', component: PrivacyPolicyComponent },
    { path: 'aviso-legal', component: LegalNoticeComponent },
    { path: 'cookies', component: CookiesPolicyComponent },
];
