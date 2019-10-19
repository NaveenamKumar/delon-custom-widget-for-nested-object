import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SimpleTableColumn } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {
  data = {
    name: 'name',
    custom: 'custom',
    outer: {
      inner: 'innerdata'
    },
    test: 'testinggggg'
  }
  // @delon/form
    schema: SFSchema = {
        properties: {
            name: {
                type: 'string',
                title: 'Name',
                ui: {
                    addOnAfter: 'RMB',
                    placeholder: 'RMB结算'
                }
            },
            logo: {
              type: 'string',
              title: 'Logo',
              ui: {
                widget: 'custom'
              }
            },
            outer: {
              type: 'object',
              properties: {
                inner: {
                  type: 'string',
                  title: 'Inner Text',ui: {
                   widget: 'custom'
                  }
                }
              }
            },
            test: {
              type: 'string',
              title: 'test',
              ui: {
                widget: 'test-widget'
              }
            },

        },
        required: ['name']
    };
    constructor(public msg: NzMessageService) { }
    submit(value: any) { this.msg.success(JSON.stringify(value)); }
    ngOnInit() {
    }
}
