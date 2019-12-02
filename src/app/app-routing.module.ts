import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAlbumListComponent } from './components/main-album-list/main-album-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: 'albums',
    component: MainAlbumListComponent
  },
  {
    path: 'about',
    component: MainAlbumListComponent
  },
  {
    path: 'related-artists',
    component: MainAlbumListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
