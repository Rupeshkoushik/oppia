// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Service for tracking the sequence of learner actions.
 */

import { downgradeInjectable } from '@angular/upgrade/static';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebugInfoTrackerService {
  _sequenceOfActions: Array<any> = [];

  reset(): void {
    this._sequenceOfActions = [];
  }

  addAction(action: any): void {
    this._sequenceOfActions.push(action);
  }

  getSequenceOfActions(): Array<any> {
    return this._sequenceOfActions;
  }
}

angular.module('oppia').factory(
  'DebugInfoTrackerService',
  downgradeInjectable(DebugInfoTrackerService));