import MenuItem from "../models/MenuItem"
import {ProductCategory} from "../models/enums/ProductCategory"

export const MENU = [
    new MenuItem("1", "Ролл 1", ProductCategory.Rolls, "Это ролл  1",
        "https://kudagid.ru/images/razvlechenia/dostavka-syshi.jpg", 150),
    new MenuItem("2", "Ролл 2", ProductCategory.Rolls, "Это ролл  2",
        "https://ogromno.ru/media/cache/product_slider_full/uploads/products/photos/5a53491e8d809.jpg", 250),
    new MenuItem("3", "Ролл 3", ProductCategory.Rolls, "Это ролл  3",
        "https://www.sloosh.ru/upload/003/u383/e/1/roll-filadelfija-images-big.jpg", 350),
    new MenuItem("4", "Ролл 4", ProductCategory.Rolls, "Это ролл  4",
        "https://avatars.mds.yandex.net/get-pdb/1058492/acfb036f-2da0-4ab4-8d88-00062c439db1/s1200?webp=false", 450),
    new MenuItem("5", "Ролл 5", ProductCategory.Rolls, "Это ролл  5",
        "https://omnum.se/img/nigiri.jpg", 550),
    new MenuItem("6", "Ролл 6", ProductCategory.Rolls, "Это ролл  6",
        "https://test.sharelife.tw/tw-news-img/44721/ba03250118021011.jpg", 660),
    new MenuItem("7", "Ролл 7", ProductCategory.Rolls, "Это ролл  7",
        "https://f.vividscreen.info/soft/f78002f1ded19504f625f55a7276d283/Japanese-Sushi-800x600.jpg", 770),

    new MenuItem("101", "Десерт 101", ProductCategory.Desserts, "Это десерт 101",
        "https://grandgames.net/puzzle/source/desert.jpg", 1001),
    new MenuItem("202", "Десерт 202", ProductCategory.Desserts, "Это десерт 202",
        "http://www.fonstola.ru/download.php?file=201311/800x600/fonstola.ru-136151.jpg", 2002),
    new MenuItem("303", "Десерт 303", ProductCategory.Desserts, "Это десерт 303",
        "https://f.vividscreen.info/soft/6e66135cb41f9b8b9667fb481aa748ef/Berries-On-Chocolate-Cake-800x600.jpg", 3003),
    new MenuItem("404", "Десерт 404", ProductCategory.Desserts, "Это десерт 404",
        "https://imgfon.ru/Images/Download/Crop/800x600/Food/sladost-yagodyi-pirojnoe-tortik-shokolad.jpg?img.20", 4004),
    new MenuItem("505", "Десерт 505", ProductCategory.Desserts, "Это десерт 505",
        "http://luxfon.com/pic/201505/800x600/luxfon.com-35307.jpg", 5005),
    new MenuItem("606", "Десерт 606", ProductCategory.Desserts, "Это десерт 606",
        "https://dzpp79ucibp5a.cloudfront.net/events_banners/13701_normal_1407109378_jawsug.jpg", 6006),
    new MenuItem("707", "Десерт 707", ProductCategory.Desserts, "Это десерт 707",
        "https://cleverculture.ru/wp-content/uploads/2019/05/morozhenoe.jpg", 7007),

    new MenuItem("1001", "Напиток 1001", ProductCategory.Drinks, "Это напиток 1001",
        "https://f.vividscreen.info/soft/e10f0d03c4e841fe6e3cc9eb3e8c56ed/Florida-Cocktail-800x600.jpg", 5001),
    new MenuItem("2002", "Напиток 2002", ProductCategory.Drinks, "Это напиток 2002",
        "https://pazl.info/img/puzzles/big/11526.jpg", 4002),
    new MenuItem("3003", "Напиток 3003", ProductCategory.Drinks, "Это напиток 3003",
        "https://www.puzzle-jigsaw.net/jigsaw/limes-cup-icecream-water.jpg", 5003),
    
    new MenuItem("10001", "Салат 10001", ProductCategory.Salads, "Это салат 10001",
        "https://im0-tub-ru.yandex.net/i?id=28a1a9b1cd3721d1961a73e1a3e175e9&n=13", 701),
    new MenuItem("20002", "Салат 20002", ProductCategory.Salads, "Это салат 20002",
        "https://images.shije.al/articles/6678/medium/1.jpg", 702),
    new MenuItem("30003", "Салат 30003", ProductCategory.Salads, "Это салат 30003",
        "https://www.soscuisine.com/media/images/recettes/very_large/3167.jpg?lang=it", 703),
    new MenuItem("40004", "Салат 40004", ProductCategory.Salads, "Это салат 40004",
        "https://p1.zoon.ru/f/d/5c1364ea6ed3923fe65195db_5c136532f2d6b.jpg", 704),
    new MenuItem("50005", "Салат 50005", ProductCategory.Salads, "Это салат 50005",
        "https://cdn.fishki.net/upload/post/2016/08/10/2037918/tn/kopengagenskiy-salat.jpg", 705),
    new MenuItem("60006", "Салат 60006", ProductCategory.Salads, "Это салат 60006",
        "http://womenpost.ru/media/upload/news/556/964.jpg", 706),
    new MenuItem("70007", "Салат 70007", ProductCategory.Salads, "Это салат 70007",
        "https://images.shije.al/articles/18194/medium/1.jpg", 707),
    new MenuItem("80008", "Салат 80008", ProductCategory.Salads, "Это салат 80008",
        "https://i.pinimg.com/originals/9a/b1/a5/9ab1a540ea281570cf2426c68e0548a5.jpg", 808),
    new MenuItem("90009", "Салат 90009", ProductCategory.Salads, "Это салат 90009",
        "https://s1.1zoom.ru/b5050/622/316917-svetik_800x600.jpg", 909),
];