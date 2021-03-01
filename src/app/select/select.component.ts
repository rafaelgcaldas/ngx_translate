import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('pt');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pt/) ? browserLang : 'pt');
  }

  ngOnInit(): void {
  }

}
