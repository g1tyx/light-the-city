/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Upgrades': '升级',
    'Water Dam': '水坝',
    'Free': '空闲',
    'Export game': '导出存档',
    'Generates': '生成',
    'Gale': '大风',
    'Hard reset': '硬重置',
    'Happiness': '幸福',
    'Import game': '导入存档',
    'Battery': '电池',
    'Autobuy': '自动购买',
    'Autosell': '自动出售',
    'collected': '已收集',
    'Crank': '摇把',
    'Turn off': '关闭它',
    'Turn on': '打开它',
    'Turn the crank': '转动摇把',
    'Total': '总计',
    'Geothermal': '地热',
    'Launch': '运行',
    'more': '更多',
    'ERASE': '擦除',
    'Doing so will reduce their energy needs by': '这样做将减少他们的能源需求',
    'Each engineer past the first assigned to a power plant in \"Alternate\" tab would boost the strength of all engineers there by 100%.': '在“Alternate”选项卡中，每一位工程师通过第一个被分配到发电厂的位置，将会使所有工程师的力量提高100%。',
    'Alternate': '备用',
    'Storage': '仓库',
    'Stores': '储存',
    'Sunrise': '日出',
    'Substation': '变电站',
    'Wind Turbine': '风力发电机',
    'Turn 20% faster': '转动快20％',
    'Calm': '冷静',
    'Cloudy': '阴天',
    'Storm': '风暴',
    'Sunset': '日落',
    'Restore backup': '恢复备份',
    'Solar Panel': '太阳能电池板',
    'Start lighting up the nearby': '开始照亮附近',
    'Owned': '拥有',
    'Night': '夜间',
    'Nuclear Power Plant': '核电站',
    'of energy overflow': '当能源溢出时',
    'town': '小镇',
    'Hurricane': '飓风',
    'Windy': '有风',
    'The wind turbines, on the other hand, require only occasional maintenance. Learn how to build them.': '另一方面，风力涡轮机只需要偶尔的维护。学习如何构建它们。',
    'By launching a dedicated program to maximize the output of solar panels, \n                we can increase their productivity by': '通过启动一个专门的程序来最大限度地提高太阳能电池板的产量，我们可以通过以下方法来提高它们的生产率',
    'By double-layering all our accumulators, we can raise their capacity\n                by a staggering': '通过将我们所有的蓄电池都双层化，我们可以极大地提高它们的容量',
    '% per engineer.': '％ 每个工程师。',
    'Transfer the heat it generates into the form of usable energy with the aid of geothermal power plants.': '利用地热发电厂将其产生的热量转化为可用的能源。',
    'We can minimize the resource waste and reduce the oil consumption by': '我们可以减少资源浪费和减少石油消耗',
    'We can make distribution of oil to our various factories more centralized.': '我们可以更加集中地向各工厂分配石油。',
    'We can assign engineers to oversee power plant and storage operations, \n                which would increase their effectiveness by': '我们可以指派工程师去监督发电厂和存储系统的运行，这样可以提高他们的效率',
    'By introducing unified rules and guidelines for operating them, we can increase their output by': '通过引入统一的操作规则和指导方针，我们可以增加产量',
    'By doing so, oil power plant effectiveness would rise by': '通过这样做，石油发电厂的效率将提高',
    'whlist increasing Uranium consumption only by 0.125.': '而铀的消耗只增加了0.125。',
    'We can work on improving wind turbine design for the sake of better energy production.': '为了更好地生产能源，我们可以改进风力涡轮机的设计。',
    'We can streamline the operations of our coal power plants, making them more effective.': '我们可以简化燃煤电厂的操作，使它们更有效率。',
    'We can promote the switch to the more energy-efficient LED lightbulbs,\n                which should reduce the energy consumption of people by an additional': '我们可以推广使用更节能的LED灯泡，这样可以额外减少人们的能源消耗',
    'can reduce their energy requirements by up to': '能减少自己的能量需求多达',
    'Enable buying if unprofitable': '如果无利可图，可以购买',
    'times as efficient.': '倍效率。',
    'This would double lab effectiveness, but increase their energy requirements by 50%.': '这将使实验室效率提高一倍，但增加了50%的能量需求。',
    'This would cause more people to enter the market, which would cause\n                your own actions to eventually have less effect on resource prices with time.': '这将导致更多的人进入市场，这将导致你自己的行为最终对资源价格的影响随着时间的推移而减少。',
    'This would cause coal power plants to produce': '这将导致燃煤电厂生产',
    'This will increase their effectiveness by': '这将增加他们的效率',
    'This game was made for': '这款游戏的目标是',
    'The best tweaks can only be made in the field.': '最好的调整只能在实地进行。',
    'The development of one of our own will allow us to sell up to': '开发我们自己的一个可以让我们卖到',
    'The drilling is hard, but practice makes perfect.': '练习虽难，但熟能生巧。',
    'The emergence of an energy futures market allows us to sell up to': '能源期货市场的出现让我们能够卖出最多',
    'By replacing our batteries with the new ones, we can increase their capacity by': '通过用新电池替换我们的电池，我们可以增加它们的容量',
    'A large array of solar cells allows us to test technologies for improvements very quickly.': '大量的太阳能电池使我们能够非常迅速地测试技术改进。',
    'All our major energy sources have a big flaw: their profitability changes with the market.': '我们所有的主要能源都有一个很大的缺陷:它们的盈利能力随着市场的变化而变化。',
    'Alkaline batteries seem to be a major breakthrough in the field of energy storage.': '碱性电池似乎是储能领域的重大突破。',
    'A recent study uncovered an interesting phenomenon called \"radioactivity\".': '最近的一项研究发现了一种叫做“放射性”的有趣现象。',
    'Actually, I just wanted to delete my backup': '事实上，我只是想删除我的备份',
    'The switch to the binary cycle on geothermal stations': '切换到地热站的二元循环',
    'The starship needs fuel to launch itself.': '星际飞船需要燃料来发射自己。',
    'The Sun is eternal - or, at least, it will surely outlive any intelligent life on Earth.': '太阳是永恒的-至少，它肯定会比地球上任何智能生命都长寿。',
    'The starship needs enough carbon onboard.': '该飞船需要在船上添加足够的碳。',
    'The starship needs carefully chosen crew.': '星际飞船需要精心挑选的机组人员。',
    'The starship needs a guidance from Earth.': '该飞船需要地球的指导。',
    'The extra trading contracts can allow us to sell up to': '额外的交易合同可以让我们卖到',
    'We can lobby the switch to centralized heating to have more control over energy used to heat the homes.': '我们可以使用集中供暖，对供暖的能源进行更多的控制。',
    'We can learn how to harness the power hidden in height differences.': '我们可以学习如何利用身高差异中隐藏的力量。',
    'We can establish the Daylight Saving Time to maximize the usage of solar light by the': '我们可以建立日光节约时间，以最大限度地利用太阳能',
    'We can develop a more compact design of a nuclear power plant.': '我们可以设计一个更紧凑的核电站。',
    'We can design power plants that use it as fuel.': '我们可以设计用它作为燃料的发电厂。',
    'will allow us to productively use temperatures as low as': '能让我们有效地利用低至',
    'Wind energy can be tricky, but we can cope.': '风能可能很棘手，但我们可以应付。',
    'Are you sure you want to reset? This will erase your save!': '你确定要重置吗?这将抹去你的保存!',
    'and base Uranium consumption by 0.075.': '基准铀消耗量为0.075。',
    'Are you sure you want to restore your deleted save from backup? Your current save will be wiped. This operation is irreversible!': '您确定要从备份中恢复已删除的保存文件吗?您当前保存的文件将被删除。这个操作是不可逆转的!',
    'Breeze': '微风',
    'By listening to them, we can increase lab effectiveness by': '通过听取他们的意见，我们可以通过以下方式提高实验室效率：',
    'With this upgrade, the engineer on enabled water dams would ensure an optimal energy output.': '通过这次升级，水坝的工程师将确保最佳的能源输出。',
    'With our new advances in electronics, we can create an efficient storage for all our scientific knowledge.': '随着电子技术的进步，我们可以为我们所有的科学知识创造一个高效的存储空间。',
    'With more people, there are more ideas.': '人多了，想法就多了。',
    'Amend the protocols to allow them to stop buying resources when this would result in a net loss \n                (this can be toggled on or off in Power tab).': '修改协议，允许他们停止购买资源，当这将导致净损失\n(这可以在电源选项卡打开或关闭)。',
    'The improvements in material quality can allow our base energy storage\n                to be': '材料质量的提高可以使我们的基础能源储存更加完善',
    'The improvements in computing efficiency opened the road for high-frequency trading algorithms.': '计算效率的提高为高频交易算法开辟了道路。',
    'By doing so, we can decrease the coal consumption of coal power plants by': '通过这样做，我们可以减少燃煤电厂的煤炭消耗',
    'The current trading protocols of our engineers in importing department are a bit incomplete.': '我们进口部门的工程师目前的贸易协议有些不完整。',
    'The content ends here. Thank you for playing! You can continue, if you want.': '内容到此结束。 谢谢你来玩！ 如果需要，可以继续。',
    'The computational power seems to be extremely important in the coming era.': '在即将到来的时代，计算能力似乎极为重要。',
    'The coal can be crushed before feeding into a power plant.': '可以在将煤送入电厂之前将其压碎。',
    'The Earth is the last of classical elements we did not conquer yet.': '地球是我们尚未征服的最后一个经典元素。',
    'The': '',
    'Renewable energy is a new and rapidly-developing field. There is much to be gained still.': '可再生能源是一个新兴且发展迅速的领域。 还有很多事情要做。',
    'reduced prices for buying materials, as the volume of traded goods grows;': '随着贸易商品数量的增加，降低了购买材料的价格；',
    '; try more cool games by other developers there!': '; 尝试其他开发商开发的更酷的游戏！',
    ', but that would triple their energy requirements.': '，但这会使他们的能源需求增加三倍。',
    'Some clever energy saving tips shared with the population of nearby': '与附近居民分享一些聪明的节能秘诀',
    'skilled engineers which would help to enhance your business.': '熟练的工程师，这将有助于改善您的业务。',
    'Send the energy for free to light up the': '免费输送能源以照亮',
    'Our renewable power plants require a special education to interact with, but it is possible to arrange that.': '我们的可再生能源发电厂需要特别的教育才能与之互动，但是可以进行安排。',
    'Oil seems to still be prohibitively expensive.': '石油似乎仍然过于昂贵。',
    'Oil is suddenly very expensive.': '石油突然变得非常昂贵。',
    'Oil is a cheap and very flammable substance suitable for energy generation.': '石油是一种廉价且非常易燃的物质，适合于发电。',
    'Partly Cloudy': '多云',
    'population.': '人口.',
    'Power': '能源',
    'Overpopulation': '人口过多',
    'Paste your save in this box and then press \"Import\"...': '将存档的内容粘贴到此框中，然后按“导入”。',
    'Matter Dimensions': '物质维度',
    'Oil Power Plant': '石油发电厂',
    'Purchase': '购买',
    'once turned': '在转动之后',
    'Light': '光',
    'Let me think it through first...': '首先让我考虑一下...',
    'Learn how to harness this new power and make it produce energy.': '了解如何利用这种新动力并使其产生能源。',
    'Learn how to gather the power of heat it emits into something more useful for industrial operations.': '了解如何将散发的热量收集到对工业运营更有用的东西中。',
    'Laboratory': '实验室',
    'Invest in an establishment of a local stock exchange.': '投资建立当地证券交易所。',
    'increased prices for selling energy, as the industrial demand goes up;': '随着工业需求的增长，出售能源的价格提高；',
    'for': '花费',
    'every second to light the': '每秒点亮',
    'Establish a study dedicated to electronic components and the possibilities they open.': '建立专门针对电子组件及其开放可能性的研究。',
    'Create a unified electrical network to which all water dams are connected.': '创建一个统一的电网，所有水坝都连接到该电网。',
    'Crank starts a new cycle automatically': '摇把自动开始新的循环',
    'Construct a Starship to escape from this planet and take humanity to the stars.': '建造一艘星际飞船，从这个星球上逃脱，将人类带入恒星。',
    'Check our other projects': '查看我们的其他项目',
    'per cycle': ' 每圈',
    'That would allow us to fit two cores into one building, thus increasing base energy output by': '这样一来，我们就可以将两个核心安装到一栋建筑物中，从而增加基础能源输出，',
    'Sunny': '阳光明媚',
    'Send up to': '传送至',
    'Starship': '星际飞船',
    'requires': '要求',
    'Research': '研究',
    'Accumulator': '累加器',
    'and more advanced buildings': '和更高级的建筑',
    'Automatically sell': '自动出售',
    'Sell': '出售',
    'Buy': '购买',
    'buy or sell resources (check the Power tab': '购买或出售资源(查看能源标签',
    'Engineers work better together.': '工程师们能更好地合作。',
    'Disable buying if unprofitable': '如果无利可图，则禁止购买',
    'Crank is twice more powerful': '摇把效果翻倍',
    '+1 base energy/cycle': '\+1 基础能源/圈',
    'DO NOT': '不要',
    'Cost': '成本',
    'Continue': '继续',
    'Congratulations!': '恭喜你！',
    'Coal Power Plant': '燃煤发电厂',
    'There is a lot of improvements that can be made in the energy storage field with low cost.': '可以在储能领域以低成本进行很多改进。',
    'Stop turning the crank': '停止转动摇把',
    'It seems that it is possible to reach': '似乎有可能达到',
    'if manned by engineer': '如果由工程师配备',
    'Here is your save string! Copy it and save somewhere...': '这是您的存档字符串！ 复制并保存到某处...',
    'Hire an engineer': '雇用工程师',
    'This would increase lab effectiveness by': '这将通过以下方式提高实验室效率：',
    'Unlock the resource market': '解锁资源市场',
    'Unlock the research facilities': '解锁研究设施',
    'Unlock an advanced energy storage method': '解锁先进的储能方法',
    'Your engineers can now automatically': '你的工程师现在可以自动化',
    'You managed to build a prosperous energy company, you lit up the whole city and you gathered enough resources to build a spaceship.': '您设法建立了一家繁荣的能源公司，点亮了整个城市，并收集了足够的资源来建造一艘宇宙飞船。',
    'You have beaten the game!': '您已经通关了游戏！',
    'You can store': '你可以存储',
    'Yeah, I\'m sure': '是的，我确定',
    'The starship needs an external structure.': '星际飞船需要外部结构。',
    'The starship needs an electricity source.': '星际飞船需要电源。',
    'The starship needs a navigational system.': '该飞船需要导航系统。',
    'By creating an interconnected web of communications between our laboratories\n                we can raise the effectiveness of each laboratory to the power of': '通过在实验室之间建立相互联系的通讯网络\ n，我们可以将每个实验室的效率提高到',
    'A \"substation\" has the storage comparable to the accumulator, but requires no Metals to build.': '“变电站”具有可与蓄能器相媲美的存储，但是不需要金属建造。',
    'By cutting off unnecessary heating times, we can reduce energy requirements of citizens by': '通过减少不必要的供暖时间，我们可以通过以下方式减少居民的能源需求：',
    'By packing the reactors in a nuclear power plant even closer to each other,\n                we can fit even more of them inside each building and increase base power production by': '通过将反应堆装在彼此更靠近的核电站中，\n我们可以将更多的反应堆安装在每个建筑物内，并通过以下方式增加基本发电量：',
    'By regulating their output with the use of specialized AI algorithms, \n                the dam productivity can be increased by': '通过使用专门的AI算法调节其输出，\n可以通过以下方式提高大坝的生产率',
    'By restructuring the natural landscape to direct more water to our dams,\n                we can improve their water collection rate by': '通过重组自然景观以将更多的水引到我们的水坝，\n我们可以通过以下方式提高其水收集率：',
    'By using our experience for the construction of new geothermal plants, \n                we can increase the productivity of all of them by': '通过利用我们的经验来建设新的地热发电厂，\n我们可以通过以下方法提高所有地热发电厂的生产率：',
    'Devise the more efficient ways of using it in the power plants \n                that would allow to reduce oil consumption by another': '设计在电厂中使用它的更有效方式\n可以减少另一方的油耗',
    'Equipping each laboratory of ours with a powerful server rack to run simulations in\n                will increase base lab effectiveness by': '为我们每个实验室配备强大的服务器机架，可以在其中运行模拟，这将通过以下方式提高基础实验室的效率：',
    'The additional citations between the research papers of our lab engineers\n                would boost our perceived science production rate by': '我们实验室工程师的研究论文之间的额外引用将提高我们的科学生产率，即',
    'The additional engineering innovations brought to our water dam design\n                would increase their water collection rate by an additional': '我们为水坝设计带来的其他工程创新\ n将使集水率额外提高',
    'The development of easy-to-use trading strategies can greatly aid our sales department and allow them to sell': '易于使用的交易策略的发展可以极大地帮助我们的销售部门并使他们进行销售',
    'The Earth is doomed.\n                The resources are more scarce with each passing year, and the climate change is going to wreck the ecosystem.': '地球注定要灭亡。\n随着时间的流逝，资源越来越稀缺，气候变化将破坏生态系统。',
    'The introduction of simple and reliable perovskite solar cells into our solar panels\n                can increase their efficiency by up to': '将简单而可靠的钙钛矿太阳能电池引入我们的太阳能电池板\n可以将其效率提高多达',
    'The material researches in the field of electronics led to a creation of a new method of energy storage.': '电子领域的材料研究导致了一种新的能量存储方法的产生。',
    'The mechanics of water dams are unnecessary complicated, and there must be a way to automate them.': '水坝的机械原理不必要地复杂，必须有一种使它们自动化的方法。',
    'The more wind turbines we have, the lower the operating costs.': '我们拥有的风力涡轮机越多，运营成本就越低。',
    'The new high-voltage energy guidelines would make engineers working in Storage department': '新的高压能源准则将使工程师在存储部门工作',
    'The new, sturdy constructions of wind turbines \n                will allow them to fully work even in strongest of hurricanes.': '新型坚固的风轮机结构即使在最强的飓风中也能充分发挥作用。',
    'The nuclear power plants can be made more efficient by linking them with each other in the global grid.': '通过在全球电网中将它们相互链接，可以提高核电厂的效率。',
    'The river dam can stockpile naturally-flowing water in a reservoir and then rush it all down for energy at once.': '河流大坝可以将自然流动的水储存在水库中，然后立即将其全部冲掉以获取能量。',
    'The special course on their inner workings will allow you to assign engineers in \"Alternate\" tab.': '在他们的内部运作的特殊课程将让你在\“备用\”选项卡上指定的工程师。',
    'The usage of high-voltage transformators can easily multiply the storage capacity of our substations by': '使用高压变压器可以轻松地将我们的变电站的存储容量乘以',
    'times greater output by using better design.': '倍通过使用更好的设计输出。',
    'times higher.': '倍那么高',
    'times.': '次.',
    'or +': '或 +',
    '% when idle.': '% 当放置时.',
    '% per owned laboratory by making them twice more expensive energy-wise.': '% 每个拥有的实验室，使每个实验室的能源成本高出一倍。',
    '% per manned laboratory.': '% 每个人工实验室。',
    '% of their max power even in bad conditions.': '% 他们的最大功率的，即使在恶劣的条件下。',
    '% for each person living in the': '% 每个人生活在',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "In return, you will get": "作为回报，您将获得",
    '%\n                per wind turbine owned.': '%\n 拥有的每个风力涡轮机。',
    '%\n                per water dam owned.': '%\n 拥有的每个水坝。',
    '%\n                per owned solar panel.': '%\n 拥有的每个太阳能电池板。',
    '%\n                per owned geothermal plant.': '%\n 拥有的每个地热发电厂。',
    '%\n                per each oil power plant constructed.': '%\n 建造的每个石油发电厂。',
    '%\n                per each nuclear power plant constructed.': '%\n 建造的每个核电站厂。',
    '%\n                of overflow energy without an engineer supervisor.': '%\n 在没有工程师主管的情况下溢出的能量。',
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "% more energy\n                per each coal power plant constructed.": "%更多的能量\n 每个燃煤电厂建设。",
    "An improved architectural design for our new wind turbine generation will allow them to gather": "一个改进的建筑设计，我们的新风力涡轮机发电将允许他们收集",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "thus helping to increase the population.": "从而有助于增加人口。",
    "of overflow energy even without a dedicated engineer.": "的溢出能量，即使没有专门的工程师。",
    "of overflow energy even without an engineer supervisor.": "的溢出能量，即使没有工程师主管。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^\%\n(.+)for each engineer past the first, but also raise the energy consumption\n(.+)by the same amount.$/, '\%对于每个工程师超过第一个工程师\n，但也增加了相同数量的能量消耗。'],
    [/^([\d\.]+) s$/, '$1 秒'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);