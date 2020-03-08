import { NgModule } from "@angular/core";
import { AlertsComponent } from './alerts/alerts.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { MessageComponent } from './message/message.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        AlertsComponent,
        FooterComponent,
        LogoutComponent,
        MessageComponent,
        SearchComponent,
        SidebarComponent,
        TopbarComponent,
        UserInfoComponent,
        LayoutComponent,
    ],
    imports:[
        RouterModule
    ]
})
export class LayoutModule {}