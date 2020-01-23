const addAll = (...rest) => {
    let total = 0;
    total = rest.reduce(
        (a,b) =>  a+b
    ) //?
    return total;
}

addAll(2,3,4,5) //?

const checkForPrime = (i)=> {
    i
    for(let j=2; j< i; j++) {
        j
        if(i % j === 0) {
            return 0
        }
    }
    return i
}

const allPrime = (range) => {
    let total =  0 
    for(i=2;i<=range; i++) {
        total += checkForPrime(i) //?
    }
    return total //?
}

allPrime(100)

// seek and destroy
const seekAndDestroy = (arr, ...rest) => {
    return arr.filter(val => !rest.includes(val))
}

seekAndDestroy([2,3,4,5,6,7,'cool','wip'], 2,'cool','wip',8) //?

// tree relocation
const relocation = (array) => {
    let tree = []
    let people = []
    array.forEach(
        (a,i) => {
            if(a === -1) tree.push(i)
            else( people.push(a))
        }
    )
    people.sort((a,b)=>a-b) //?
    tree.forEach((val, i) => people.splice(tree[i], 0, -1))
    return people //?
}

relocation([-1,2,4,-1,400,200,-1,9,8,7,-1])


// missing letters
const missing = (str) => {
    let compare = str.charCodeAt(0)
    let missing;
    str.split('').map(
        (char,i) => {
            if (str.charCodeAt(i) === compare) {
                ++compare
            } else {
                missing = String.fromCharCode(compare)
            }
        }
    )
    return missing
}

missing('abcdeg') //?


// add even odd
const evenOdd = (numbers) => {
    let sum = []
    let obb = 0;
    let even = 0;
    numbers.forEach(
        (n) => {
            if (n % 2 === 0) {even += n}
            else {obb += n}
        }
    )
    sum.push(
    obb,
    even
    ) 
    return sum
}

evenOdd([2,2,3,3]) //?


// hacker rank algo

const remove = (st1, st2) => {
  let count = 0;
  let freq = new Array(26).fill(0);
  const inc = (c, i) => freq[c.charCodeAt(0) - 'a'.charCodeAt(0)] += i;
  for (let c of st1) inc(c, 1);
  for (let c of st2) inc(c, -1);
  for (let v of freq) count += Math.abs(v);
  count
}

remove('bugexikjevtubidpulaelsbcqlupwetzyzdvjphn', 'lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk')
// remove('cde', 'acb')


'bugexikjevtubidpulaelsbcqlupwetzyzdvjphn'.charCodeAt(0) - 'a'.charCodeAt(0) //?


const slide = (a) => {
    let arrayOfA = a.split("")
    let delCount = 0;
    for(i=0;i<arrayOfA.length -1; i++) {
        i
        arrayOfA[i] //?
        arrayOfA[i+1] //?
        if (arrayOfA[i] === arrayOfA[i+1]) {
            ++delCount //?
        } 
    }
    return delCount
}

slide('ABABABAB') //?

const freak = (s) => {
    const obj = {}
    const obj2 = {}
    let feq = [];
    count = 0;
    s.split("").forEach(
        (char) =>  obj[char]? obj[char] = ++obj[char] : obj[char] = 1 
    )
    for (x in obj) {
        if(!feq.includes(obj[x])) {
            feq.push(obj[x])
            obj2[obj[x]] = 1
        } else{
            ++ obj2[obj[x]]
        }  //?
    }
    feq
    obj
    obj2
    if (obj2[feq[1]] <= 1) { return 'YES'}
    else {return 'NO'}
} //?

freak('zbrnkdmvacbokapdtypltebzqtjhwkwvnplxsxvsbwjnxyrsyietnhsfadmyoiwdahdsgynjuyxtyqmxysqnzlscofacpwgpflkljxvfxuzvknskflygwskkzlprjxgriscrrzwotxkfkcqrnqylkkwkvlbhijyqecjvcfkvdudpyvholhzxrxhpkkyswykaatxebhcedfveacsnltkdtuudgsycskesecxhlbnpgitglnvyifddbxhirhmjrrextdeeervkcqspfnnqurtwqcgijsrdjxaeahleagqczirexfusyoqoswwcoqhanheoqpurylvzvndtuansqdgibfmrvtrkdwatnxmniimdxsytslliqtqtadlxycibakxohjdrtqxsivlcjykzsctsheqgiajjmgxuqcllsiecgpepoqqgvjacpskyuujhaidskqefzihhxowlemtbywenqqnlkwulexfrnjwordvptrcagwbeuftkyjvihrvoobfekbsegqtahxapvbvpjpahaxrhrnvfqajcdegkubmdzmtupokafmjflbpcqkkgnvkszrevsqzreuoukywsmgzzhoczbohqjrilipgdfhukdigoiciwihwryaqzozrzrbkbqtewcbgglmwwoeuznqqlsjkiibkzfwdvpjrukzaynyueeodrhtdbcpkltumyqrvibncnoelcehgiyjbhegijwuwrqkrjcmtdbxqqbeshlapjlqsrxbavvwoojfxltqqxngnqkhxyhmhuealbdmyakmottngpdwmsfbipifnrtxlyzwbekcevovqkixzovngaorswyhpseasfwvljxseonwaxvzlrourcljalrpdxrxfpvqysicixzivwjinxehbrqddjuijliqbdgzxregqdqlbawpzcwduoizadjjorzpuhpuatarysezucqwfmzbdhcdklobfpqzwhvzcvqaqwckzugehhhmpjpbwdcbuvdqeyrhwhjmenwfifjrmsdddshzxjbrggjledsakdoqrnvzsgqeatkdnrdmcgdjmowsroverjwiyujqazxdshgfyjrarwlfnhygxtkrejbddlvfksifbpmbagcuepzrxxywsknzvpeyczgmuqtxfgzimdcqsbkrbkotwbussysuayjwpctwiuewxinsmzjnjzifbdxvdqqdqzbhdvempkipvxhhwsufsenvjkqncisvhuclrizivjzqjgxhztptzcojogyrpqmymqlfzkquwpmfwlmxgdsffgoumonbhbctrnbsyrowiabgnpdttvzadpusehvlkxgcljwlclhlnkrbbxuwuvxyntqtdngnlopwymjazqnmcfpdckcyhzwwuopxcvlpkclkqwmrmaeqftvjfxhpygltwdsaafpmicwayjsmlycstydbxkqwsdrrglrhrhtblsbkbvyotdgpbjqaviyolrfsdybuhwvtoyfpwddrglgjuwmqekgsclmhjndrjamyyrpwwvofgwqdtctzpzttmfaxudqgdcgdtvcssqzbmpehuzjjyccmkejejakocqtyovsilrjagpjaosloxncjtmpcoaqqskqihittbeviuekkzwbyldhfrwjfycytoodvzwqcblkxsxhrvkrgqynhuxpvbnopdrmeodhrqtoksxdniuuysjhpiwkjlaaptnvhseykyovqmyeuvaunjdescqbnseemtatlguveisxutbqodmdmqigsakhtomfhoasuwpbfiybbburegusyczqfjyyxmfechywepxlzxocyitcrovpsuixfixcueiwmiuqxubzrpbsaxwrnrgfnqfsyewujesvonnojonafqshnpyaihiyxnsyrrscxlxmamajanlidgptxqthxdfwqawkrpoqcoccaenbtylxecsbsnjrrqqjsmvldkcfygjylwbevmdbrvfjlqdcitnbfjoltqqtxarkyvovhuxarckcungciufpduaykrrjtkvrfmnpgmpxobaioimwcsmhmmhyfykylfsqrfhxrxxhyzrphfnkxbtjqbkxbuymzqfrxoqqnnzomsduxsgvwbgmcqjgkhsmzzdwotodjnrvfurdpzylbgzfxiljsgvrfaqvwebfssczpucevcrylqekaptsxrmfrecpkduewzelvipqlgpwyvgymbrkufpolrdvvaarzeeumvmzbdxbydzlhsvbxkpidvgyvgrukvqyqcytgvugburkoolmadweyeevkwrwthvklvdtsaatwtfkktykwxqwbvtmtkimtfweacavccqavwkfpjsngklhfevaoenhllnopnjtpztnveumpmzvxkceqahgewprjdfzsouioovjurwjgxgfkkjakshooygybnzucteqjbbfsxqyxwdhhpjrhsiyrqwsdvofqsxatzhoyymvusebhovqgdozvmsajigabdcwejkdhzycrffatasbfhbctvdddlfgqhfvsryaqyejdljyocavldygybldmqmczrzsixuzyykdjucxyetlhtrhufmivymxpmpaljbljlpuhtuhznsiimperbmocanroctanulygctnvnxwcpekdvowzclbcaurdotsigrqjkggzddbuhlydbucdhfhizannvhycyqnkwtjzymwgxulaqpdyunivnvllcjndzapyvbzunvcnpnniergagovvlggprtstvkrrlqlyonlfczngstgyjdtwkcodvgwtsnkdgxeumpzoqnwiieiuhestggxdptwhjinrfrltimjbbflmluivycqgjnjajihuqwlynyrymdzoikcwgmrgohmxxyxighcydnwtnqtztspderblfurucerberjkanifchypztqulgxszbdfvuzzasaellqlabrcirthlkdysaqrbvyxszysuzzfmrrnskpcbjlovopnphgsdfrvgqparqgdixscjifktqbofqdwxjqcqkxxapxtffypersnbxawnbmutpqqajtrtsqvhnonvoczhwnitngjqsdjjwbkfubaprvwgllbzqdhmqrifyrvswgcuhmbepbtiwrqhfujxxslpjtwjmtclzefgshmhifphzhqebzbyrmpdilmueofdunmmuyvegklfucjvbmwvylaizodddkjzxvmrvhwbujgqlrlpdjmevmmuarzfcihbfttbcreyalqoecdknpqidcefwglaosbwnwxrpbssoigvmlfacvkfzrkxxxxnrzjevgylkqdaalvnwcpyzzdbqpypnwdgxmlsvlffdkhdvdsthjrhjwibmgtbewhbkuwffdmiouolzifgsypdvxejgzkkvtogoknvnagduurvcwbuurxrqeayfmjbgzjwjwtywzesvvnatrwpkwhacjzhwkkejtausvuqvylsvysoppgbnncpwdwuphyycyuwwontpylmygbqxhrkwvzuyxpnennjojhkaudpuqdvwentnedjcegacvqiifrwpzipvlgsejpaqcufizrkexngsdoakizzjjqgvyabkpbctxhcxamdxzjpezspjtqucjbzjdavtcxobhqyhdbhemwjoqyzlquozxpjaqgvugkvncwwfzdmocvcuvdglxwnwlyzbewxkitzlpwsqbeefbicwmiklexipvjtbfqmqjndalvrncxufgwcsgmdklnciyvjglxwxlzzwwslaqigwekqlyvxjlztjwepkcnhpmgnlzbnrjtnndfadaamlzfvykmioapfmxszytnpciesojurmugxwluuxhcnhtsvqnvpgkglslfgwzaiuggstamrhqgqjzmzohqurxhlkmugoupkaxctzqmjgtzpuloiuheneozqatwopnapmckmsxvyswnoieyclcqrqrhtmdjbtkqfmarhzohrlvhvbfzmirdaikvupfvipnodqhmryuljrsgsyfeixjkftgcklztcpjhfsuyqojbfehzcndmkmwrhetrrvmtkxdpsxpinzkudtthgytsmrkvyfopadlkaobsnrdcspyxiterrzjfsvaqdogfrrsuhvmumrwggudpnhggirlbpnrsbzzvqrpzndtbvribnnscxaifuvgjiadmzchsuwrjblkweuasiuufvfkratajtdvuhembaekdrxcxrcpzymgvrtmrmmchrxbzboadunhnkjkdncfloljfevwsizzzybacrdfnqoaczmhoomceyljcgivqjwshxsjqvrfnhfrjuzxklzpjmyotiljrhbzhwkzrbfhlmyugzrtltiwfimarxkihnjqjupdxumijkcrkwkxputwdixwfhemwoeiiulhqxqzjstvqdufyqcdybzdkfsgvwodsbnjadkmxdhojevjuzmsanxksrtqqhvilitnlezjhjzsnubhupzucwhxqangjiouriieojnxsoqfjrmdhnzlmgkcixisiyobiwfwgvuajmgsdsxmgzashkwqieiscwtnvajdvfdfrlzxezlmylgfwcvggfyketxbtjepqjwixxhbwupugvaezxkffkrjdrkwcqlsbjcyhlbdgqamncsmzctemnppeznirzatkdtrovxwnxidzapyelfsyuhewvmnwogitaakxxgkwrnvtfvyqaqqxawtxkgvypdupfemekyabovvttvltldsnzlmluhljlfasjoxwoxxcvuvopgjdleqkrdxlmjwzoysaopwdovflqdzhllkxpdjgihuwqswgrogffekvcshuvibgvodmtntdupzmhvsalbisfsqjkzdhjhofxtrqgmvcduonshnfixypsqzepemylafitxaclvepqvckerpmppdhfelujzvwzafvzfzlbfctagdexusokyxpcjmnihkkjphjwgwznysogxudspucnrtpcfdnonzyegjaofcdfutluoqofksseljgtovjdujhcskszmweiprefiskukeawojrceagbkpdcbycnuiylactkvdgfihdysucwvixhadjbbnrxypkatdmojswrbbrtwtsteraewlhxbawzphzjknztfxmjzfexzwsdqsjmfsmgtihiritevvzbsomttqqspixfcgribdquoyefgalcvlfpzrjsjbnykkdotxwucpoqnsytsjxpucfvvqofrbfdnlsgiqamfqduldqfonvlscgpswwjxcplnhtxzwjfmobxrrdgharbczquwnftrugedcddymkkblkufpcmrtntvfpruwmlrvruxuzvhjhkxtecijqbefuzkjqfgdszykvxexsngbxfvejfnzhrgbtrnjyvoqwoctlhqfwxhuecaojppqiwubpjnngbfcqivdrmjnlsjrwlffavwltqmibzxhdejvogyfujvhbezxqgfsdbdwtsgwtddyiotwuuerdzyhdzgvgnqjovijpofjskhcydavxemcdmljmsgsfwdwunhjcpuwzcaahavefhgktstfmcztafrusbewqyurcurjvmpctympsiwekyzkfthxulwklsbqnvbkhrodpashkqnuoohthotbbrnmjpeymgktzywqzqzljmgxcptkfolgfzuqqzpchzxgywwzoxkxjsxnjqxoelulkrdcqsgzufhubfvqchnnakalcyaijwtvnxzfrhenmlhoseeumthmgixiizrtwmojlprfwxsilcydgeysafggpgoxfhqdwgphxgmtdfeojespjsijxqppwfmcpfflnuslchggokwxpqmaiwjinaxjhlnwqvjercrwlxezkawzribbhmjumgfvsvuiqdojhhfsfjrpmpqdyrehdqbrwimodiztmpftxmocwftivjnvctcfjfwinkwrtxmhnrcmgqqcwjmtubqwwsbizzqmlofgmsnblqnridveojzimpejjhtigjxtxealwpmkhbdqgbwumwcznikzpdhxmgrlltzjknvspzkvcgqoeunudxtuccsojlcwgdhqqdkhewdgfvwjrmfwjyrmblcmwgiejrucuhjadmikjfudrzzcaqqbbvnzdxdnoapjjalmpuxyztbsubuwtnxxkmynjcayerjnsubjqahpvljsogohtmgdyfqkjtknmtcgpdpiezzbkjtapijkwqnwxfggaqvplxvdanlgmkiytdyklhujxjgupmcrdxgquctxrgddrndmtbxgirqidweuihlnesgbwzypgdsztvlmyksgekqhgvbreogkimlgolvwrpvmkiakvurzfjileleizltizgqnumjlbgzorzymtrlabtmhgssfdnpdtgspueaxkbldampwdcwgxkoddgjitanoigeckgawinakzrgfufnrpbvujgdegqvpyztkhvhrjjckakpwrdohgjdsriyxztozukkeftvoezzgkqdbvrkecqyvywszsjzotluyeqpkrqqdgthemrkqjiligghapirktlkzdzjvpayyvfekzoaiwoseuaflkwxehhdnjpiapiymoewnszxonqtjsawcwvifcoundcoulogbtdolencrdxcxxaavvkczyxnbzbvmpenijdwntygwvkwukyphirghqtkswieoouyxzukssqrpanjmlattuzckvpctzjhnfgkecuzxmqmofyaqatluuohrflneuurzcbghxfejxsxcqzutsfnovwiaivecrxewymdxthiqzfusgolavaprxzrfuyjlvphwbkvutemtlgnswyssajjxiceccqqafxyhktddxqwjyjbvjvpkhyjpcqufgkhljfutyyxyqvhqhknqhccocmefcamkkvvtaspasmykjhaqrojzqlpvzvcdvqpfllblfqlxemhntjelxpmqcdlezpjufzcqmfdrvqqbcxowgujgjxwoajszabwfayvmfafcqvdtstrbqajbxhpxqhzqjvxlvuaaufekbhfvawyqwhsvojtgruycrvpoppqjvuwwbbrdyswuzqqozlushvwyqmogberwynubpogpgclfudvwqsoxnlxdxllapdxpqrqhfxylbktynouegkbtxbzwmkxcnutgnkptjogmazknqgtwrvsqyrnkdkotgiztuqodgxpgwcuminlbkdsiwfvzrlszttunmlssikzgmvvwkgyxlshjzcksodrjylzkyrfgdgnrbionqokdgsmfwwzmbqwcdvmcotiszxlahzqznacvuocrnbdorzqxwfznyjhajscsssshtufnlhgyjkoclfzkmazmmgmxappshhccchsnqylzkbeygfiuijjupvtpmikuqoyuxqjnrupbxtbgalaiujejhxbtglpybosyeblvxczwvacymdggonsvktrsggsjumhbpuwoxxluynsmsbuhomeahvvncnwycfzrayizvvtviojdpekfqqfyocnsqmqursntqvsnqolbcueraqyrgdrwgeoyqfukxhdpfycxmpyomehmufddkwzsbostvmfuujjbjnyvdxlpbsdyzhdlfcegsycplhjhssibigylfjcjbhhcqkowoucjsgyfqimicwmkfkxmwbvzjeczqsvhoaqgiomyyajbzvnehlqdomdxshxjzuqnuivdyjdxmmaljnptahypvbooknzliraebwjzhnwtbyglmxgofedaiuqshrepiewjcflmuhfyimlujrkqvqtdkjyrdejlkfxnmkzjtghbusvgliwgyrmibkzeqirapqpcaqnuxuxtotbzdahbrtjufkyvvsykknonedjdzgwnbyoeywhrrqmzdkwyeukribemeppevntzliflgndzdpyibviiptzxwflcuairoesboypulutqlszophwecxeaepdaqnsgrmjfkabxuvohppwgyukdsodweixwwrepfpvqqynmvduksqsrmduetzdzicvgtbxyruqhtgvojpbehtxwwtasudrchnkaqibhctqxzmmldnrngqjfjlxfrokydubueedjxugzismnhdaqvlxgzulqkvoqsrmwvphtlostighqjjgexdmwzxmltcdlwpjrfrkqhempkthvepbbunxvnlhgqktmccfhvszcwnujibgntkqnzojmbsstenhgsnpnfrsdeoonpxaihqygghtkznfddnmvcbkjscoxqfkicmslcqrlzmxaccgfrsattkeoptlfaxpcjinnygaavxaxagcraenworkfmxlmuaqfkfslmvlhsngsuimwozscsckfzvtvxmakrvvfqimkvsdrcroqqgvklfpmclibxilqfiwvqkimdldherawavglcyxejhhistyxbuvsfdekqjtubtqbqyoswnyhvgrpbsmeojyvmeheobypwqsnrihnxixsqqjtiwxxfwsuaayqdzhzrzoijyyhgvbynlrwhqtoonkrnjhsipszqikagihofkmsvfqewjvkzfboojhyabaqjkqquzgbkttfykmwvhhumkjdvsdvtdmcpculcbmouivushrpoamdkvggnjbippkgsfswgemcmhygppwfriiefqmucpctfozztrvbyjfmqethvrnnbxtiqfesuinzwmysgvvgebsxfleaerpfriphntbkbolycmsijnooojnvwrwblniewylltmxvcjvevnpecfutojonbmooaysyydlsrjpvukbrzqvdyswoblbexrszqmxorlikuxfqhhhizcmxwioavpethzszlspddynzvtpfcwpdabdxmrzhgdcpcxoorerucgtzbkedguhixkhlbgvjkxzowpenvvhxeczfodjuzsfxemihvdshdrvzjanexwebbdhpismimrfqfnzatrhwlfvufkaehegkjpzsjlaveflkukmpbulmbjigtjkcpsmzhotqztngaaqwkcmoyzczinheyugnmvowlhomccseckbpnpfnojpxyydwsjmhgafrkveoxytcjwtylanblcakddgxpsgxvlphhvvgvokemfczfqbrubbzhjxwedtzrkiahdiduvjgamggehzakcarnzprejsvtaxdegiabrgdfoljvkmioobcnrtrampvomasuisxabbfpmrnzdvnrypgplxpzmnnbnivwcvydwdvkwijzfzsdqytbykakzonnwllygjeeozqlhcmobfrrfmtdxtqwjdlfoygwhkawltjsvvgwczpimilledjphvxxtdwdpybarkumhckkbaspkfaqjkgshdrcinhzokzfuvsexeoaeiqrnshyepsnsksczzbpkcvgzpkytyzagrrwjawqqpdkbvncxqshvnnueatzauzhlsfwtbmjssttpgymzqvufjqlllklfkusczpvddevxarnipbhhxdoguztfjentzfyauvdaabxcsmkjouqlxettfmboqoirtisqdxqfyphsesbsmtdlzyfekgtcudwnlofqnxwmndgrxiljdqvfoalaigeclaryqxpeulsjqycoinxoduvtwgtepaiaaabtzqztdrdtrhhcvfqabluytpeipnlspmloemhhfmawuiyrpqrsbnsxdxfsmsmbgzpklyrqnuphcnatetlhheekdmepgrqnqhxcfpusjjbnzdgdxtmeztqcfurnnjaesyiapesaowpnbxsyqgeqzusgrmugxukquuqjzklpiaekxwkqcpgelakeoelmbxevswhtiskrvodsmnkoessqvfujlfxmddixzrsijcbesgzetlsaenszumifuiszlcyltsveuwlmemsxxkzbzravglbctvdezbrsvmypkjdovvothnwjhxenihpdeujdvbxqnwhahmqdjeysuudbtkqdthgybqbyrzqgxzienzjyfhqzewcxiubbbjzezdcseubbtjfgkreqaxrevuedqheuqgysjdmnxnqrzxzjoezpdrvynzddghzzpyrabdpyt') //?


