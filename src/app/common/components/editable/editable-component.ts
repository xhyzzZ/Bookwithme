import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

export class EditableComponent implements OnChanges {

  @Input() entity: any;

  @Input() set field(entityField: string) {
    this.entityField = entityField;
    this.setOriginValue();
  };

  @Input() className: string;

  @Input() style: any;

  @Output() entityUpdated = new EventEmitter();

  isActivateInput: boolean = false;

  public entityField: string;

  public originEntityValue: any;

  constructor() { }

  ngOnChanges() {
    this.setOriginValue();
    this.isActivateInput = false;
  }

  updateEntity() {
    const entityValue = this.entity[this.entityField];

    if (entityValue !== this.originEntityValue) {
      this.entityUpdated.emit({[this.entityField]: this.entity[this.entityField]});
      this.setOriginValue();
    }
    this.isActivateInput = false;
  }

  cancelUpdate() {
    this.isActivateInput = false;
    this.entity[this.entityField] = this.originEntityValue;
  }

  setOriginValue() {
    this.originEntityValue = this.entity[this.entityField];
  }

}
