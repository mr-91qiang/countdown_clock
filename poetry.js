const poetries = [
    "一寸光阴一寸金，寸金难买寸光阴。",
    "三更灯火五更鸡，正是男儿读书时。",
    "花有重开日，人无再少年。",
    "人寿几何？逝如朝霜。时无重至，华不再阳。——晋·陆机",
    "黑发不知勤学早，白首方悔读书迟。",
    "东隅已逝，桑榆非晚。——唐·王勃",
    "老冉冉其将至兮，恐修名之不立。——战国楚·屈原",
    "少壮不努力，老大徒伤悲。",
    "圣人不贵尺之壁而重寸之阴。——《淮南子·原道训》",
    "莫等闲，白了少年头，空悲切。",
    "志士惜日短，愁人知夜长。——晋·傅玄",
    "皇皇三十载，书剑两无成。——唐·孟浩然",
    "一日无二晨，时间不重临。",
    "失之东隅，收之桑榆。——《后汉书·冯异传》",
    "少年易学老难成，一寸光阴不可轻。",
    "子在川上曰：逝者如斯夫，不舍昼夜。",
    "志士惜年，贤人惜日，圣人惜时。——清·魏源",
    "花儿还有重开日，人生没有再少年。",
    "花开堪折直须折。莫须无花空折之。",
    "冬者岁之余，夜者日之余，阴雨者时之余。——《三国志·魏书·王肃传》裴松之注引《魏略》",
    "节气不饶苗，岁月不饶人。",
    "惊风飘白日，光景西驰流。——三国·魏·曹植",
    "莫倚儿童轻岁月，丈人曾共尔同年。——唐·窦巩",
    "不饱食以终日，不弃功于寸阴。",
    "时而言，有初、中、后之分；日而言，有今、昨、明之称；身而言，有幼、壮、艾之期。——唐·刘禹锡",
    "勿谓寸阴短，既过难再获。勿谓一丝微，既绍难再白。——清·朱经",
    "光阴似箭，日月如梭。",
    "盛年不再来，岁月不待人。"
]
let index = Math.floor(Math.random()*poetries.length);  
const poetry = document.getElementById("redom_poetry")
poetry.innerHTML = poetries[index]
setInterval(() => {
    let index = Math.floor(Math.random()*poetries.length);  
    const poetry = document.getElementById("redom_poetry")
    poetry.innerHTML = poetries[index]
}, 30 * 1000);
