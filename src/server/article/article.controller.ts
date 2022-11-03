import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('api/article')
export class ArticleController {
    constructor(private readonly _articleService: ArticleService) {}

    @Get('/list')
    getAll() {
        return this._articleService.getList();
    };
}
