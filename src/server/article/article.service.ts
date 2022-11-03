import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { promisify } from 'util';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';
const promisifiedReadDir = promisify(fs.readdir);

@Injectable()
export class ArticleService {
    constructor(private readonly _configService: ConfigService) {};

    getList() {
        return promisifiedReadDir(path.join(this._configService.get('dataPath'), 'articles'))
    }
}
