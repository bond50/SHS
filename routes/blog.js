import express from "express";

const router = express.Router();
import {
    create,
    list,
    listAllBlogsCategoriesTags,
    read,
    listHomePageBlogs,
    remove,
    update,
    photo,
    listRelated,
    listSearch, listFooterBlogs,
} from '../controllers/blog.js'

import {requireSignin, adminMiddleware} from '../controllers/auth.js'

router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/blogs', list);
router.get('/list-recent-blogs', listHomePageBlogs);
router.get('/list-recent-blogs-footer', listFooterBlogs);
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/blog/:slug', requireSignin, adminMiddleware, update);
router.get('/blog/photo/:slug', photo);
router.post('/blogs/related', listRelated);
router.get('/blogs/search', listSearch);


export default router;
