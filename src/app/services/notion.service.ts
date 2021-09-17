import { Injectable } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Client } from '@notionhq/client';
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class NotionService {

  testService() {
    console.log('DB Service online!');
  }

}
