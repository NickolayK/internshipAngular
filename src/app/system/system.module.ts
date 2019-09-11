import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './shared/route/system.routing.module';
import { SharedModule } from '../shared/shared.module';
import { SystemComponent } from './system.component';
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { DropDownDirective } from './shared/directives/drop-down.directive';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { CurrencyComponent } from './bill-page/currency/currency.component';
import { BillService } from './shared/services/bill.service';
import { MoMentPipe } from './shared/pipes/moment.pipe';
import { AddEventComponent } from './records-page/add-event/add-event.component';
import { AddCategoryComponent } from './records-page/add-category/add-category.component';
import { EditCategoryComponent } from './records-page/edit-category/edit-category.component';
import { CategoryService } from './shared/services/categories.service';
import { EventService } from './shared/services/event.service';
import { HistoryChartComponent } from './history-page/history-chart/history-chart.component';
import { HistoryEventsComponent } from './history-page/history-events/history-events.component';
import { HistoryDetailComponent } from './history-page/history-detail/history-detail.component';
import { HistoryFilterComponent } from './history-page/history-filter/history-filter.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SearchPipe } from './shared/pipes/search.pipe';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SystemRoutingModule,
        NgxChartsModule
        

    ],
    providers: [
        BillService,
        CategoryService,
        EventService
    ],
    declarations: [
        SystemComponent,
        BillPageComponent,
        HistoryPageComponent,
        PlanningPageComponent,
        RecordsPageComponent,
        SideBarComponent,
        HeaderComponent,
        DropDownDirective,
        BillCardComponent,
        CurrencyComponent,
        SearchPipe,
        MoMentPipe,
        AddEventComponent,
        AddCategoryComponent,
        EditCategoryComponent,
        HistoryChartComponent,
        HistoryEventsComponent,
        HistoryDetailComponent,
        HistoryFilterComponent
    ]
})
export class SystemModule {


}