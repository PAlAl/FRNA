import MenuItem from "../models/MenuItem"
import {ProductCategory} from "../models/enums/ProductCategory"

export const MENU = [
    new MenuItem("1", "Ролл 1", ProductCategory.Rolls, "Это ролл  1", "", 150),
    new MenuItem("2", "Ролл 2", ProductCategory.Rolls, "Это ролл  2", "", 250),
    new MenuItem("3", "Ролл 3", ProductCategory.Rolls, "Это ролл  3", "", 350),
    new MenuItem("4", "Ролл 4", ProductCategory.Rolls, "Это ролл  4", "", 450),
    new MenuItem("5", "Ролл 5", ProductCategory.Rolls, "Это ролл  5", "", 550),
    new MenuItem("6", "Ролл 6", ProductCategory.Rolls, "Это ролл  6", "", 660),
    new MenuItem("7", "Ролл 7", ProductCategory.Rolls, "Это ролл  7", "", 770),

    new MenuItem("101", "Десерт 101", ProductCategory.Desserts, "Это десерт 101", "", 1001),
    new MenuItem("202", "Десерт 202", ProductCategory.Desserts, "Это десерт 202", "", 2002),
    new MenuItem("303", "Десерт 303", ProductCategory.Desserts, "Это десерт 303", "", 3003),
    new MenuItem("404", "Десерт 404", ProductCategory.Desserts, "Это десерт 404", "", 4004),
    new MenuItem("505", "Десерт 505", ProductCategory.Desserts, "Это десерт 505", "", 5005),
    new MenuItem("606", "Десерт 606", ProductCategory.Desserts, "Это десерт 606", "", 6006),
    new MenuItem("707", "Десерт 707", ProductCategory.Desserts, "Это десерт 707", "", 7007),

    new MenuItem("1001", "Напиток 1001", ProductCategory.Drinks, "Это напиток 1001", "", 5001),
    new MenuItem("2002", "Напиток 2002", ProductCategory.Drinks, "Это напиток 2002", "", 4002),
    new MenuItem("3003", "Напиток 3003", ProductCategory.Drinks, "Это напиток 3003", "", 5003),
    
    new MenuItem("10001", "Салат 10001", ProductCategory.Salads, "Это салат 10001", "", 701),
    new MenuItem("20002", "Салат 20002", ProductCategory.Salads, "Это салат 20002", "", 702),
    new MenuItem("30003", "Салат 30003", ProductCategory.Salads, "Это салат 30003", "", 703),
    new MenuItem("40004", "Салат 40004", ProductCategory.Salads, "Это салат 40004", "", 704),
    new MenuItem("50005", "Салат 50005", ProductCategory.Salads, "Это салат 50005", "", 705),
    new MenuItem("60006", "Салат 60006", ProductCategory.Salads, "Это салат 60006", "", 706),
    new MenuItem("70007", "Салат 70007", ProductCategory.Salads, "Это салат 70007", "", 707),
    new MenuItem("80008", "Салат 80008", ProductCategory.Salads, "Это салат 80008", "", 808),
    new MenuItem("90009", "Салат 90009", ProductCategory.Salads, "Это салат 90009", "", 909),
]