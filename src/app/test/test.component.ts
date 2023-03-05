import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Test1Service } from '../test1.service';
import { Test2Service } from '../test2.service';
import { Ts01Service } from '../ts01.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public messageService: MessageService,
    private test1Service: Test1Service,
    private test2Service: Test2Service,
    private ts01: Ts01Service
  ) { }

  /**
   * Do your test stuff in ngOnInit()
   */
  ngOnInit(): void {
    this.ts01.spreadTest();
  }

  clearMessage() {
    this.messageService.clear();
  }

  hasMessages() {
    return this.messageService.hasMessages();
  }

}
