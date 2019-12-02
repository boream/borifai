import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAlbumListComponent } from './components/main-album-list/main-album-list.component';
import { AboutComponent } from './components/about/about.component';
import { RelatedArtistsComponent } from './components/related-artists/related-artists.component';


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
    component: AboutComponent
  },
  {
    path: 'related-artists',
    component: RelatedArtistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
