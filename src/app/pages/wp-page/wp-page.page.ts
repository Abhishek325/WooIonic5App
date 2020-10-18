import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WpPage } from 'src/app/services/wordpress/interface';
import { WpPageService } from 'src/app/services/wordpress/service';

@Component({
  selector: 'app-wp-page',
  templateUrl: './wp-page.page.html',
  styleUrls: ['./wp-page.page.scss'],
})
export class WpPagePage implements OnInit {
  page: WpPage;

  constructor(private route: ActivatedRoute, private wpPageService: WpPageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.wpPageService.getContentForPage(paramMap.get('slug')).subscribe(data => {
        this.page = data[0];
      });
    });
  }

}
