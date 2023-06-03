const { getKeyword } = require("./index");

const testCases = [
  [
    "CODEWARS",
    "NSWXARWJGEXIJCZWUZLOAWFJFTUIMUVFEWHWPEEVVCYENYSGVVECSRZLGFDRZBPKWPMIYTFFGQDRJOKOTWWIWNVKUOBEXOLLZFDCOWZLJCXXQSZFITUIMUVFVLVEJDKZGSVWWYNANZKERERFKRLSOYEUTOWMYLVLVSUJNEHMGBFCEFKZGSVWWYZKCPRYPTYWHFHUQEELWGHSBXISAGWSPRVSVNHFNAJAPEDXWRUAHTHVANKSWHKSNSYSXSKEXIKKYVLGDCRFDSUIBLVUVSGMJTYWKFXWAOWDGHWINSYWOWQKSAPKYFLXENXKVMOIBOIWZOPTHEZKXWVMXLPVKTIINEELHFRQBALDMBHVOLVLVSUFEGISOHUMCRREYCUHBRVIWSQGEEJOQFGPANXLJOQHOEELGBFIHEEYVVFEJBVUCZFYHAKWFTRVOPVUKTLGWUKZQFVEJDLKGRWSLRFNGCUHESGJQJHEQTYGTGKMLOWLGLWWAVVFHCUEQTYGTGZLKSVKVMOIOAIWPCWWKDZNGFJIJTRUEIUEPERNGFDKALVLVSUJNEHMGBFMASTSPCQPUBVYNSDRADSQCBDPUZZFIOOENGVSOCXRPOWJGDUIOEELCHLZATVPVKLXDTYWCJDMHASANWWCKFDGFSURYODHWHLRCAEVECOPACKAQBVSBLRJISWITTTGTDRVWSLUJQDPYUCSVWRROAIWGOVMHYDSFSHBWMGDGGFEJBVVTOZRBRFECJDVEEKQQTVSQRTWUDUIOSIWRCUXENXJGZLKEOLKVSAXOSTAGBWMBITLGLWWWNUYGBHVWLWAEHLSJAEVVVHVAAIWFWIJARVFESVIOPVUKOOPUFFJISQINACXKQWMKNNAVVWLAPFKKHLSJOWZCBGMSIKZJPHGKMZFIARVACFEOCQLARSWTHVDEMZFJWVGHAJKKQLRPRFVWQWSNYTJADWSCRRHJMWITTTGFSVEJDJWEFHXSRZLKBJKEVVKVVHIJGCAUVOIPTVJHFHUQEEUAGHUQEEUGOVIPAFFTWVLZLWUOIJCLWSNMXAUVTYWOCVXYODEQBOIPTVJROLVOAJLJVHEJRVWTWQSJAKFFGWIOEEGHHHIZOILKVLEOTFSPRWLAMFKVQRQIOEVQIEPADCWVHHVOAJDNSHWOOFLVTIVNNEHRQFXDEKGRHZIHVVDGHWINSTGODUMOERTQIWSBTYWVCWEHUJSISWLATFHGWJLPLVLVSUWYODHTWVIWBFMVCIXDEKGVOOYOAXWNSWXARWJGEXIJCPSUOIYJCKAQBRJNAECEOQFAFZLVSGAALCTAGHZARRDTOQOBUEUVWRROWZLJHKIPWFHCFDQATVJECFLKBVLCFDRGFLFEHLSJBVAPUWLABVKVOQSPHVJTOQOBUEUVWRRSIKZPCDHFUJLCPOIBRVWROUEIEKWTOOWKFZLUHKIHEKLGFIVAQLWPQBHESKJKPXXEOEJGOVSJASDAKHPHTYWUOPIBUEUVWRRDAJTGSQYOEULQTLXPHVSOWQSWCZVHFHUQEEUAWQTNOKWKBVIMUVFESVEOPPMUWQKPHVNKQFMLHVJQFVSIEFLJSUGEPYWTPDWADFFCGWVWDUDKBJGDETCGFESWRULADLGWLCQWGHWWMEWOCQMYSLUJOVEOIELQSUVZRFHRWQKPHVKGQRRZRKGTSPIIBVJVVHXKPVAIVWGDAISEHHVOTYWWGHSBLVLVSUJNEHMGBFMASRFFTUIMUVFEMDRWLPKKGSPWYJSHIQHWMVFVOOVKLVAPQUCLTFYTOPWWNUKGJHVWLNGTRSYVZCWIOPIOIEUNIGMJGYSPUPEJSTJCPEPAAEVVVHXALVNKGLSJGREGGKSSWYWGZRJBOILWBHSJEFXVVHIWRCAGGWHASTJKDWMKNZFEZDWOITSNZLXARRLWFHSBAGHNMLRCTYWMBRAHEUYGCIIJGCAUVOIPTVJHFHUQEEUAHRWKLMAPUDGNYGLQUUEIIJXQIQHENVSRCHWBADGWGVXKRPLJSJSHDSMIKKINEKZGAHXDOUAUGXGYEJKHIOPUAGHNWHHPOUWEWSLARREGGVECEZFUHUYYTZFICQXDENZGFHEXOLLUCIEPRVSUIUIDIUVGBECYAGLCWQOEDUDGHWINFIWSIHRYIVKJOGEOTIGPUHJBETLQBWLADVKKUQSBSFEGYHCXORJFZDCKUKKVVHQKSKXTSTYANKDGHWINSRJGCQXDESGVHRQNONGHHKIXLZUMSQWZEIXGFWCLENJKHHVWNULJSKSIEIGYCIXDEUNQFDOOIDHNWIMADBWAPREND",
  ],
  [
    "BABBAGE",
    `NSWXARWJGEXIJCZWUZLOAWFJFTUIMUVFEWHWPEEVVCYENYSGVVECSRZLGFDRZBPKWPMIYTFFGQDRJOKOTWWIWNVKUOBEXOLLZFDCOWZLJCXXQSZFITUIMUVFVLVEJDKZGSVWWYNANZKERERFKRLSOYEUTOWMYLVLVSUJNEHMGBFCEFKZGSVWWYZKCPRYPTYWHFHUQEELWGHSBXISAGWSPRVSVNHFNAJAPEDXWRUAHTHVANKSWHKSNSYSXSKEXIKKYVLGDCRFDSUIBLVUVSGMJTYWKFXWAOWDGHWINSYWOWQKSAPKYFLXENXKVMOIBOIWZOPTHEZKXWVMXLPVKTIINEELHFRQBALDMBHVOLVLVSUFEGISOHUMCRREYCUHBRVIWSQGEEJOQFGPANXLJOQHOEELGBFIHEEYVVFEJBVUCZFYHAKWFTRVOPVUKTLGWUKZQFVEJDLKGRWSLRFNGCUHESGJQJHEQTYGTGKMLOWLGLWWAVVFHCUEQTYGTGZLKSVKVMOIOAIWPCWWKDZNGFJIJTRUEIUEPERNGFDKALVLVSUJNEHMGBFMASTSPCQPUBVYNSDRADSQCBDPUZZFIOOENGVSOCXRPOWJGDUIOEELCHLZATVPVKLXDTYWCJDMHASANWWCKFDGFSURYODHWHLRCAEVECOPACKAQBVSBLRJISWITTTGTDRVWSLUJQDPYUCSVWRROAIWGOVMHYDSFSHBWMGDGGFEJBVVTOZRBRFECJDVEEKQQTVSQRTWUDUIOSIWRCUXENXJGZLKEOLKVSAXOSTAGBWMBITLGLWWWNUYGBHVWLWAEHLSJAEVVVHVAAIWFWIJARVFESVIOPVUKOOPUFFJISQINACXKQWMKNNAVVWLAPFKKHLSJOWZCBGMSIKZJPHGKMZFIARVACFEOCQLARSWTHVDEMZFJWVGHAJKKQLRPRFVWQWSNYTJADWSCRRHJMWITTTGFSVEJDJWEFHXSRZLKBJKEVVKVVHIJGCAUVOIPTVJHFHUQEEUAGHUQEEUGOVIPAFFTWVLZLWUOIJCLWSNMXAUVTYWOCVXYODEQBOIPTVJROLVOAJLJVHEJRVWTWQSJAKFFGWIOEEGHHHIZOILKVLEOTFSPRWLAMFKVQRQIOEVQIEPADCWVHHVOAJDNSHWOOFLVTIVNNEHRQFXDEKGRHZIHVVDGHWINSTGODUMOERTQIWSBTYWVCWEHUJSISWLATFHGWJLPLVLVSUWYODHTWVIWBFMVCIXDEKGVOOYOAXWNSWXARWJGEXIJCPSUOIYJCKAQBRJNAECEOQFAFZLVSGAALCTAGHZARRDTOQOBUEUVWRROWZLJHKIPWFHCFDQATVJECFLKBVLCFDRGFLFEHLSJBVAPUWLABVKVOQSPHVJTOQOBUEUVWRRSIKZPCDHFUJLCPOIBRVWROUEIEKWTOOWKFZLUHKIHEKLGFIVAQLWPQBHESKJKPXXEOEJGOVSJASDAKHPHTYWUOPIBUEUVWRRDAJTGSQYOEULQTLXPHVSOWQSWCZVHFHUQEEUAWQTNOKWKBVIMUVFESVEOPPMUWQKPHVNKQFMLHVJQFVSIEFLJSUGEPYWTPDWADFFCGWVWDUDKBJGDETCGFESWRULADLGWLCQWGHWWMEWOCQMYSLUJOVEOIELQSUVZRFHRWQKPHVKGQRRZRKGTSPIIBVJVVHXKPVAIVWGDAISEHHVOTYWWGHSBLVLVSUJNEHMGBFMASRFFTUIMUVFEMDRWLPKKGSPWYJSHIQHWMVFVOOVKLVAPQUCLTFYTOPWWNUKGJHVWLNGTRSYVZCWIOPIOIEUNIGMJGYSPUPEJSTJCPEPAAEVVVHXALVNKGLSJGREGGKSSWYWGZRJBOILWBHSJEFXVVHIWRCAGGWHASTJKDWMKNZFEZDWOITSNZLXARRLWFHSBAGHNMLRCTYWMBRAHEUYGCIIJGCAUVOIPTVJHFHUQEEUAHRWKLMAPUDGNYGLQUUEIIJXQIQHENVSRCHWBADGWGVXKRPLJSJSHDSMIKKINEKZGAHXDOUAUGXGYEJKHIOPUAGHNWHHPOUWEWSLARREGGVECEZFUHUYYTZFICQXDENZGFHEXOLLUCIEPRVSUIUIDIUVGBECYAGLCWQOEDUDGHWINFIWSIHRYIVKJOGEOTIGPUHJBETLQBWLADVKKUQSBSFEGYHCXORJFZDCKUKKVVHQKSKXTSTYANKDGHWINSRJGCQXDESGVHRQNONGHHKIXLZUMSQWZEIXGFWCLENJKHHVWNULJSKSIEIGYCIXDEUNQFDOOIDHNWIMADBWAPRENDGMZXRVWVZYAIAGZINTOORAFVYNXIDYVRXQKWGIEHOWBEECSSOPHCJVZXZZGRQFPWPJPIPXFRZKGRASKAMQZINRVWNIEEOSLXSZGCFAZXCWAXHWZRBNXIDYVROFYEAHKLZMYWNCNMGTNEIIRRDLOSFCEGMIZMPPVXOMXJEIHYZVICVJKLZMYWNCZWVJUYGXYIAZKUHIEXPAKSSBIETAZSGVVEOHKFEEJMIYGXNVUMANKVRRKEPBNSEWYEQMNEOMKWRPOGUGRRWMXISPVGOMJMAXYIDZAWRSWPZBZIEWYIHQTKJEPWRZOXVRXWOGRISSIISISTYIZWQQYMOPPHDNLIEIEXAZUQSELPFVKVFPVXOMXFVKIEHBXMTVRQRWXHSVVUPMTGVIJAJZJPRRXXCITHFIEXZVIIYIEKOPIEAFVGVTIYYEKIYNUVFTVGDNOGNYKLJZYEAHLWZLZSCVFZZWXHVWGVJDKEHXYSMANMCSWXZFZWRZVRAWXEHXYSMACLBWVWOGRIFEIIIWZWBHZZZZMIAXRGXCXEGIRZZZGKRPVXOMXJEIHYZVIMRWTEIWTPLFVKGMGRRHSCVVGPLDZRBIREEKVEHWARGSWVZXXIFIEXVBOZRXVBOEOXUXYIVDGMYESMGQZCBJDSYMXRPSDTPBORTEEHXWRPRGKMJVYSSPRVBMZIKXTSMXUVNWLGCKGPPYCEOQURFEIIZIYMYCDEYMKBNQGPZAIEAFVHMICRSVFQVDGVVIKCJNYSHVTINXXIFWIIKWXXVRXVZTOKVSLWOMDXFWTMZVZMSMTXZFZWNRUKZVKVNPWMXBOSAEEHOPKVREIIYQLJRVVRXMYIFTVGDIRPLJFVBMTIEECJDKZMBRNMOPZLRTFWDBOSASWLVVJMJMKLCJKGBQZRBUUVRGFQHWTLRVSIMBYDVQZRCQYGYEJWDKORGVFHPKZSECTVTXZSTVRTCGZIKXTSYMYEAHJIXZKXJVZXDVMKVZVWOPKIAKCMNPRIGXVVAZKUHIEGTAKUHIEGZIYIGEFRMQYLQPWGHCMCCASZFRDUMXYIHWYXPSDQJVRIGXVVKIOVFEJXCPKEAVVIMQTSAEKRYAZIFIESABKIQSIXDPOEFXFEILZLRQFWOKUQZSEHJCHPRHCIOBKVFEJPGMKWFSFXONLVERETKKIXUIKSKBCIYZVPZBZIEWTSHXXMFIRFJCZSSXYIOWZEYYJEBMZLRXFTZQMLGPVXOMXWPSDTMQYINFFYOWLXUIKSOIRYFEXIGMZXRVWVZYAIAGPENILYAGKMJVUJEEEOXITFRJZXOMJARPCFTAKZRVRPMITOSYEGOQURFAZXCBNIGAFTVZGQRXVVXWILBFVXVZGRXJLRXBOSAFVMIOZLRFVWOITSGLVVMITOSYEGOQURJMKLIWGHWYJXVJRISVVIKIXEZIKIMIRWBJZXNBNIYIKXZZLVRULIIKEHVWKVDJAXVSEVZIYSAESPTEKPYXYINISISYEGOQURUEJFZMTYFIUXJNOXGLVEHQTSNGZHAZKUHIEGTQTTESKIDVYIDYVRXMYEFTPYNQTKGLVZDKIMCLVVJZYSZIFXCMXGVTYIMJGWRHFRVAZVNHUPDVMGUITOZZHSNVUXTXOGNPCCPAKWNQEIHWTMPWLGCIYEFMEXJMXVQVFTKQTKGLVWZKURQVKSMMSIZFVVOPKXBTVMBPZGUEIEXBKVFXYIPAKSSPVXOMXJEIHYZVIMRWRRYNXIDYVRXGGRNPPWDAVPNCJEACTHNQVROIRVBPVMIKXCCXFKMISWNRUWZDKVNPNSMLVYMDCIBISIFMEGGCJMAKYEIOSEAWTVVJHPREEHOPKXRPVZDAOSAKRQZANSJAYIZTUJSSIXPVKSAIFJOPKINVCMZAZHRWTVDXZMBRZRXTGWFMTEGTOXRVRXPZKSSEGTGGORTXYIFVUAYIUKZWLIAKCMNPRIGXVVAZKUHIEGTBUWBPMMIOGGECGXJOXEZMJJJCTHVRVEKWKWSEDSPAYXBVPXCMMSYHSYBENIEIKLZUKXUSUMNAAGPIJWACRPLEGTGQKHGSUIXQVLRVRQZAYETIZRNBXYPXZRBWTXUINLZZKEOSLXNWLEGVVENCXIUMUHZVHCPEGXVQTOVHUPZBZIEJIILCKRPMVWCIJEFXISIOKJSITXJVZLRHVWDOTSSWFQZSKCOSRVYTGCBYKWOPKQBWKJMMWYRRKPZBZIEWRVZWTXUISSOBUQESNSABNIOPZGFMTWQIIJZZZCCINVDBKVNRUXCMNSZIISRWLXUIUZJZGOFMDTGQLMRHBITJUEEHMEUUEXJSERVETGJETMIQIXOSEFXIRUFOCOITTFODZSWASZBUXIBZXROXFRBODHCTUCKEIXPNFDATRPTXSIZIBNFTSGCBBPVTDVBYTXIZLPUUVSORHFSFQAIOTYTATHUHFFSYEZWJMLNEWEBOIJMPSZOCXEUIDMEZXFRGSEWYFNDZILXIEFTSGCJSBCOAXUHFGRKUVEOUUYIPFYSAEWUOUSEGXAECSAYMOQBUAXHJFGFRKRUAVUHUVTHBWENECIUTWNMDHDBNHISEGMEIXFDJOTNIJRVTEUJMEUUEXWIENJNMABYTXROXJNHTTEPFFPSEDENPMFIYZJSJCLEHJFGFRKRUFSPMLEVLLOEXWMEUUEXFJGSBMZVJGSBMCSSDGSEWYFNDJEYAPREMETKUHBODYIOTFOCKPFNHUHIEOBFDARGVLBUEJJPRTQEIMGIDBUZLPRTBNJYTEEUOVVPVFPRJMTPSPVKEVTIPRYLJPPGTKBUSFWETJPRBVTNSSSXIOYITTZMEYESEOPTYSEIWFRMIOTBDCAVBTFBVKVBGFMEZXFRGSEWYFNDJEYGBNPOLEFFGMFATIEBZBNGPZZJOGGPBRHFASSVNUPFXIQRFTETXBTJWEZIYTXJTNXIEBWAOPBBJMIZCPFNPDKVOCPNPAXJNHBNJGPLMFCZMPNTPFRESGFUEDXDOSQOXETUDICGPDUMBTOSOSBSEKETIMZMGHFEYBMVPFSDBNHIERBXNLVPMBWAXMFTZPFYSVRDFSVVFSTSEVSSTJOGXIMIHJOAWUEYUSYGJEOUILMDTFYTYEODHFNKVBLGJCZMPNBODZLFRFBRKHJFGFRKRDETFSVIDIBMLEJPRHFNKVBLGJCZMPNXJTNXIEQPSOXJOOPFNEODJXIZLIBFDOSMOGNPRKGPMNPNNISBFSTYDJMJOHOWDLBTSOGJNUSOJYDTPSYIVZPUPGXEQHZUEDXDOEFSGRESFDRKXXRJUITKHIWFSZLFEOHLOWILFUTKVGRFRUKRDYTFQAIOCFBSKXBOOSIYLELGDMAKZPXCVQNYQAUHKQPSUDOSQPNMFTZISPBJRYETTIIEGRSEFSITSOAUODYXFSFOOLXFEEPRZMIIBTTUEODUIESSTTDPMSSODPVBRIELFUTKVTATMLKITSPPTZJGRSONVTDCUIEZSQTXFLBIMEUUEXWDONQROWFACPUZSGTIFTUXBLVTAMIUHFUOVIJGIULKXUESTCUQQRJTEGFPUUPFZLFTPUARYTAHFLKXUESGRKUVEODYGWBFVOCZMPNPGRGRLCBOBKJJTUFDCIMLCZSKZFRBMRGRLFVOCZMPNTXIZLUHFUWUTBRBNEZISCPDHUFFTBSATOGUODTOSOBFJNMXIECFSZEOOUIEXVBNLGUTGUIPOWOXINPBDPYTTBCLKJSEFQAXENEUFRGPTOGJTYXIEMFTZISFSFQAIOCZEIYXSICVTOSORFBSURBBMZWKPMTIFSGQFFVOCZMPNIBSHIFNVTEJXPFJUTNIBMJOOGGJDGSEWYFNDZITTSOUFITWFQVFNIITATQYAWJNHUHKZJCDJPNISOSTOSIPTIFRIMQHFSBGWFDPOAYXSAEELORHCIFCQISBPBRJXZPJDARPZUTFSGQOENPNOGTUDIAYETIOUOKVSDSPPVMOGUIEYIDOOERZSSENFMHISTIFTUTFIHITILBRBDTKVTTIFUYIPFMFTZISFSFQAIOCJFSGREFSFQAIOCZBNGPZSJTPREZSBGUTHBMFOTGPSOMFITGSYQUOMVBMTBNJWFVFSARAPREQUFDMEHBMKWJNDMUJMOGIBNMQBNTDRGFCLFBNJXIEUFLKZJSJPNMENETIOCAIEFMOLJPRUVNKSOEPGTNIFASMIKWUDFTCXMQTJPNORDLBTSOGBLMJTKVBTVSEUJBPQMYORHTIFKTSXLFEGKSGEOHLOWILFUTKVGRFRUKRDYUPSUPWIOHAIVZPUPGXENITGOAREIOFAVSFSGBMUYTSUPREXIEHPLJFVGXIEXIUHFNEZLPDJTSAGDETTFAPMYBQPRMFDUPDKGJPIFRGQFSTBGKMOSUSUIXJNHPNZLFWIFRKECOVUSUJBTSFAYYSEIJDJIOBZDAVXBIOLIJHMEUUEXJSERVETGJETIAJETTSPNMIGFFDTURUHFEEYMHNPGSUQFKFZBUESDMBYUYUSUIESSTTGSEWYFNUMEZXFRTBRKSOTIFBUXUONSOCSGTIFBRMDKFOSJISFFSTETFWSJTKVBNEUHKLPMFSOCSGTIFDBSSALTISTMIGJEJOFYCPAXH`,
  ],
  [
    "BABBAGE",
    "MEUUEXJSERVETGJETMIQIXOSEFXIRUFOCOITTFODZSWASZBUXIBZXROXFRBODHCTUCKEIXPNFDATRPTXSIZIBNFTSGCBBPVTDVBYTXIZLPUUVSORHFSFQAIOTYTATHUHFFSYEZWJMLNEWEBOIJMPSZOCXEUIDMEZXFRGSEWYFNDZILXIEFTSGCJSBCOAXUHFGRKUVEOUUYIPFYSAEWUOUSEGXAECSAYMOQBUAXHJFGFRKRUAVUHUVTHBWENECIUTWNMDHDBNHISEGMEIXFDJOTNIJRVTEUJMEUUEXWIENJNMABYTXROXJNHTTEPFFPSEDENPMFIYZJSJCLEHJFGFRKRUFSPMLEVLLOEXWMEUUEXFJGSBMZVJGSBMCSSDGSEWYFNDJEYAPREMETKUHBODYIOTFOCKPFNHUHIEOBFDARGVLBUEJJPRTQEIMGIDBUZLPRTBNJYTEEUOVVPVFPRJMTPSPVKEVTIPRYLJPPGTKBUSFWETJPRBVTNSSSXIOYITTZMEYESEOPTYSEIWFRMIOTBDCAVBTFBVKVBGFMEZXFRGSEWYFNDJEYGBNPOLEFFGMFATIEBZBNGPZZJOGGPBRHFASSVNUPFXIQRFTETXBTJWEZIYTXJTNXIEBWAOPBBJMIZCPFNPDKVOCPNPAXJNHBNJGPLMFCZMPNTPFRESGFUEDXDOSQOXETUDICGPDUMBTOSOSBSEKETIMZMGHFEYBMVPFSDBNHIERBXNLVPMBWAXMFTZPFYSVRDFSVVFSTSEVSSTJOGXIMIHJOAWUEYUSYGJEOUILMDTFYTYEODHFNKVBLGJCZMPNBODZLFRFBRKHJFGFRKRDETFSVIDIBMLEJPRHFNKVBLGJCZMPNXJTNXIEQPSOXJOOPFNEODJXIZLIBFDOSMOGNPRKGPMNPNNISBFSTYDJMJOHOWDLBTSOGJNUSOJYDTPSYIVZPUPGXEQHZUEDXDOEFSGRESFDRKXXRJUITKHIWFSZLFEOHLOWILFUTKVGRFRUKRDYTFQAIOCFBSKXBOOSIYLELGDMAKZPXCVQNYQAUHKQPSUDOSQPNMFTZISPBJRYETTIIEGRSEFSITSOAUODYXFSFOOLXFEEPRZMIIBTTUEODUIESSTTDPMSSODPVBRIELFUTKVTATMLKITSPPTZJGRSONVTDCUIEZSQTXFLBIMEUUEXWDONQROWFACPUZSGTIFTUXBLVTAMIUHFUOVIJGIULKXUESTCUQQRJTEGFPUUPFZLFTPUARYTAHFLKXUESGRKUVEODYGWBFVOCZMPNPGRGRLCBOBKJJTUFDCIMLCZSKZFRBMRGRLFVOCZMPNTXIZLUHFUWUTBRBNEZISCPDHUFFTBSATOGUODTOSOBFJNMXIECFSZEOOUIEXVBNLGUTGUIPOWOXINPBDPYTTBCLKJSEFQAXENEUFRGPTOGJTYXIEMFTZISFSFQAIOCZEIYXSICVTOSORFBSURBBMZWKPMTIFSGQFFVOCZMPNIBSHIFNVTEJXPFJUTNIBMJOOGGJDGSEWYFNDZITTSOUFITWFQVFNIITATQYAWJNHUHKZJCDJPNISOSTOSIPTIFRIMQHFSBGWFDPOAYXSAEELORHCIFCQISBPBRJXZPJDARPZUTFSGQOENPNOGTUDIAYETIOUOKVSDSPPVMOGUIEYIDOOERZSSENFMHISTIFTUTFIHITILBRBDTKVTTIFUYIPFMFTZISFSFQAIOCJFSGREFSFQAIOCZBNGPZSJTPREZSBGUTHBMFOTGPSOMFITGSYQUOMVBMTBNJWFVFSARAPREQUFDMEHBMKWJNDMUJMOGIBNMQBNTDRGFCLFBNJXIEUFLKZJSJPNMENETIOCAIEFMOLJPRUVNKSOEPGTNIFASMIKWUDFTCXMQTJPNORDLBTSOGBLMJTKVBTVSEUJBPQMYORHTIFKTSXLFEGKSGEOHLOWILFUTKVGRFRUKRDYUPSUPWIOHAIVZPUPGXENITGOAREIOFAVSFSGBMUYTSUPREXIEHPLJFVGXIEXIUHFNEZLPDJTSAGDETTFAPMYBQPRMFDUPDKGJPIFRGQFSTBGKMOSUSUIXJNHPNZLFWIFRKECOVUSUJBTSFAYYSEIJDJIOBZDAVXBIOLIJHMEUUEXJSERVETGJETIAJETTSPNMIGFFDTURUHFEEYMHNPGSUQFKFZBUESDMBYUYUSUIESSTTGSEWYFNUMEZXFRTBRKSOTIFBUXUONSOCSGTIFBRMDKFOSJISFFSTETFWSJTKVBNEUHKLPMFSOCSGTIFDBSSALTISTMIGJEJOFYCPAXH",
  ],
  [
    "F",
    `ZYXZWWJSIJWGJTSLTTIYJWRXBNYMFQQUJWXTSXXUJFPDTZWYWZYMVZNJYQDFSIHQJFWQDFSIQNXYJSYTTYMJWXJAJSYMJIZQQFSINLSTWFSYYMJDYTTMFAJYMJNWXYTWDFATNIQTZIFSIFLLWJXXNAJUJWXTSXYMJDFWJAJCFYNTZXYTYMJXUNWNYNKDTZHTRUFWJDTZWXJQKBNYMTYMJWDTZRFDGJHTRJAFNSFSIGNYYJWKTWFQBFDXYMJWJBNQQGJLWJFYJWFSIQJXXJWUJWXTSXYMFSDTZWXJQKJSOTDDTZWFHMNJAJRJSYXFXBJQQFXDTZWUQFSXPJJUNSYJWJXYJINSDTZWTBSHFWJJWMTBJAJWMZRGQJNYNXFWJFQUTXXJXXNTSNSYMJHMFSLNSLKTWYZSJXTKYNRJJCJWHNXJHFZYNTSNSDTZWGZXNSJXXFKKFNWXKTWYMJBTWQINXKZQQTKYWNHPJWDGZYQJYYMNXSTYGQNSIDTZYTBMFYANWYZJYMJWJNXRFSDUJWXTSXXYWNAJKTWMNLMNIJFQXFSIJAJWDBMJWJQNKJNXKZQQTKMJWTNXRGJDTZWXJQKJXUJHNFQQDITSTYKJNLSFKKJHYNTSSJNYMJWGJHDSNHFQFGTZYQTAJKTWNSYMJKFHJTKFQQFWNINYDFSIINXJSHMFSYRJSYNYNXUJWJSSNFQFXYMJLWFXXYFPJPNSIQDYMJHTZSXJQTKYMJDJFWXLWFHJKZQQDXZWWJSIJWNSLYMJYMNSLXTKDTZYMSZWYZWJXYWJSLYMTKXUNWNYYTXMNJQIDTZNSXZIIJSRNXKTWYZSJGZYITSTYINXYWJXXDTZWXJQKBNYMNRFLNSNSLXRFSDKJFWXFWJGTWSTKKFYNLZJFSIQTSJQNSJXXGJDTSIFBMTQJXTRJINXHNUQNSJGJLJSYQJBNYMDTZWXJQKDTZFWJFHMNQITKYMJZSNAJWXJSTQJXXYMFSYMJYWJJXFS`,
  ],
  [
    "Q",
    `OEKSQDAUUFOEKHXUQTMXUDQBBQREKJOEKQHUBEIYDWJXUYHIQDTRBQCYDWYJEDOEKYVOEKSQDJHKIJOEKHIUBVMXUDQBBCUDTEKRJOEKRKJCQAUQBBEMQDSUVEHJXUYHTEKRJYDWJEEYVOEKSQDMQYJQDTDEJRUJYHUTROMQYJYDWEHRUYDWBYUTQREKJTEDJTUQBYDBYUIEHRUYDWXQJUTTEDJWYLUMQOJEXQJYDWQDTOUJTEDJBEEAJEEWEETDEHJQBAJEEMYIUYVOEKSQDTHUQCQDTDEJCQAUTHUQCIOEKHCQIJUHYVOEKSQDJXYDAQDTDEJCQAUJXEKWXJIOEKHQYCYVOEKSQDCUUJMYJXJHYKCFXQDTTYIQIJUHQDTJHUQJJXEIUJMEYCFEIJEHIZKIJJXUIQCUYVOEKSQDRUQHJEXUQHJXUJHKJXOEKLUIFEAUDJMYIJUTROADQLUIJECQAUQJHQFVEHVEEBIEHMQJSXJXUJXYDWIOEKWQLUOEKHBYVUJERHEAUDQDTIJEEFQDTRKYBTUCKFMYJXMEHDEKJJEEBIYVOEKSQDCQAUEDUXUQFEVQBBOEKHMYDDYDWIQDTHYIAYJEDEDUJKHDEVFYJSXQDTJEIIQDTBEIUQDTIJQHJQWQYDQJOEKHRUWYDDYDWIQDTDULUHRHUQJXUQMEHTQREKJOEKHBEIIYVOEKSQDVEHSUOEKHXUQHJQDTDUHLUQDTIYDUMJEIUHLUOEKHJKHDBEDWQVJUHJXUOQHUWEDUQDTIEXEBTEDMXUDJXUHUYIDEJXYDWYDOEKUNSUFJJXUMYBBMXYSXIQOIJEJXUCXEBTEDYVOEKSQDJQBAMYJXSHEMTIQDTAUUFOEKHLYHJKUEHMQBAMYJXAYDWIDEHBEIUJXUSECCEDJEKSXYVDUYJXUHVEUIDEHBELYDWVHYUDTISQDXKHJOEKYVQBBCUDSEKDJMYJXOEKRKJDEDUJEECKSXYVOEKSQDVYBB`,
  ],
  [
    "U",
    `MUHXVFUGCHACNIHSIOCZSIOWUHNLOMNSIOLMYFZQBYHUFFGYHXIOVNSIOVONGUEYUFFIQUHWYZILNBYCLXIOVNCHANIICZSIOWUHQUCNUHXHINVYNCLYXVSQUCNCHAILVYCHAFCYXUVIONXIHNXYUFCHFCYMILVYCHABUNYXXIHNACPYQUSNIBUNCHAUHXSYNXIHNFIIENIIAIIXHILNUFENIIQCMYCZSIOWUHXLYUGUHXHINGUEYXLYUGMSIOLGUMNYLCZSIOWUHNBCHEUHXHINGUEYNBIOABNMSIOLUCGCZSIOWUHGYYNQCNBNLCOGJBUHXXCMUMNYLUHXNLYUNNBIMYNQICGJIMNILMDOMNNBYMUGYCZSIOWUHVYULNIBYULNBYNLONBSIOPYMJIEYHNQCMNYXVSEHUPYMNIGUEYUNLUJZILZIIFMILQUNWBNBYNBCHAMSIOAUPYSIOLFCZYNIVLIEYHUHXMNIIJUHXVOCFXYGOJQCNBQILHIONNIIFMCZSIOWUHGUEYIHYBYUJIZUFFSIOLQCHHCHAMUHXLCMECNIHIHYNOLHIZJCNWBUHXNIMMUHXFIMYUHXMNULNUAUCHUNSIOLVYACHHCHAMUHXHYPYLVLYUNBYUQILXUVIONSIOLFIMMCZSIOWUHZILWYSIOLBYULNUHXHYLPYUHXMCHYQNIMYLPYSIOLNOLHFIHAUZNYLNBYSULYAIHYUHXMIBIFXIHQBYHNBYLYCMHINBCHACHSIOYRWYJNNBYQCFFQBCWBMUSMNINBYGBIFXIHCZSIOWUHNUFEQCNBWLIQXMUHXEYYJSIOLPCLNOYILQUFEQCNBECHAMHILFIMYNBYWIGGIHNIOWBCZHYCNBYLZIYMHILFIPCHAZLCYHXMWUHBOLNSIOCZUFFGYHWIOHNQCNBSIOVONHIHYNIIGOWBCZSIOWUHZCFFNBYOHZILACPCHAGCHONYQCNBMCRNSMYWIHXMQILNBIZXCMN`,
  ],
  [
    "M",
    `GOMZWQQBKAGDTQMPITQZMXXMNAGFKAGMDQXAEUZSFTQUDEMZPNXMYUZSUFAZKAGURKAGOMZFDGEFKAGDEQXRITQZMXXYQZPAGNFKAGNGFYMWQMXXAIMZOQRADFTQUDPAGNFUZSFAAURKAGOMZIMUFMZPZAFNQFUDQPNKIMUFUZSADNQUZSXUQPMNAGFPAZFPQMXUZXUQEADNQUZSTMFQPPAZFSUHQIMKFATMFUZSMZPKQFPAZFXAAWFAASAAPZADFMXWFAAIUEQURKAGOMZPDQMYMZPZAFYMWQPDQMYEKAGDYMEFQDURKAGOMZFTUZWMZPZAFYMWQFTAGSTFEKAGDMUYURKAGOMZYQQFIUFTFDUGYBTMZPPUEMEFQDMZPFDQMFFTAEQFIAUYBAEFADEVGEFFTQEMYQURKAGOMZNQMDFATQMDFTQFDGFTKAGHQEBAWQZFIUEFQPNKWZMHQEFAYMWQMFDMBRADRAAXEADIMFOTFTQFTUZSEKAGSMHQKAGDXURQFANDAWQZMZPEFAABMZPNGUXPQYGBIUFTIADZAGFFAAXEURKAGOMZYMWQAZQTQMBARMXXKAGDIUZZUZSEMZPDUEWUFAZAZQFGDZARBUFOTMZPFAEEMZPXAEQMZPEFMDFMSMUZMFKAGDNQSUZZUZSEMZPZQHQDNDQMFTQMIADPMNAGFKAGDXAEEURKAGOMZRADOQKAGDTQMDFMZPZQDHQMZPEUZQIFAEQDHQKAGDFGDZXAZSMRFQDFTQKMDQSAZQMZPEATAXPAZITQZFTQDQUEZAFTUZSUZKAGQJOQBFFTQIUXXITUOTEMKEFAFTQYTAXPAZURKAGOMZFMXWIUFTODAIPEMZPWQQBKAGDHUDFGQADIMXWIUFTWUZSEZADXAEQFTQOAYYAZFAGOTURZQUFTQDRAQEZADXAHUZSRDUQZPEOMZTGDFKAGURMXXYQZOAGZFIUFTKAGNGFZAZQFAAYGOTURKAGOMZRUXXFT`,
  ],
  [
    "W",
    `XAYWQOAODAPDKQCDPPDAOQJDWZCKPJKXQOEJAOOPKXAPDANAWBPANPDAZWUSWOZKJAEPORANUNQZAKBDEIODAOWEZPKYKIAWJZOLKEHPDABQJPDAOAWSWOSAPWOSAPYKQHZXAPDAOWJZOSANAZNUWOZNUUKQYKQHZJKPOAAWYHKQZXAYWQOAJKYHKQZSWOEJPDAOGUJKXENZOSANABHUEJCKRANDAWZPDANASANAJKXENZOPKBHUPDASWHNQOWJZPDAYWNLAJPANSANASWHGEJCYHKOAWPDWJZPDAUSALPHEGAWJUPDEJCPKOAAOQYDMQWJPEPEAOKBOWJZEBPDEOSANAKJHUYHAWNAZWSWUPDAUOWEZEPSKQHZXACNWJZEBOARAJIWEZOSEPDOARAJIKLOOSALPEPBKNDWHBWUAWNZKUKQOQLLKOAPDASWHNQOOWEZPDWPPDAUYKQHZCAPEPYHAWNEZKQXPEPOWEZPDAYWNLAJPANWJZODAZWXEPPANPAWNKKUOPANOYKIAWJZSWHGSEPDQOPDASWHNQOZEZXAOAAYDWLHAWOWJPSWHGWLHAWOWJPPWHGWHKJCPDAXNEJUXAWYDSAYWJJKPZKSEPDIKNAPDWJBKQNPKCERAWDWJZPKAWYDPDAAHZAOPKUOPANHKKGAZWPDEIXQPJARANWSKNZDAOWEZPDAAHZAOPKUOPANSEJGAZDEOAUAWJZODKKGDEODAWRUDAWZIAWJEJCPKOWUDAZEZJKPYDKKOAPKHAWRAPDAKUOPANXAZXQPBKQNUKQJCKUOPANODQNNEAZQLWHHAWCANBKNPDAPNAWPPDAENYKWPOSANAXNQODAZPDAENBWYAOSWODAZPDAENODKAOSANAYHAWJWJZJAWPWJZPDEOSWOKZZXAYWQOAUKQGJKSPDAUDWZJPWJUBAAPBKQNKPDANKUOPANOBKHHKSAZPDAIWJZUAPWJKPDANBKQNWJZPDEYGWJZBWOPPDA`,
  ],
  [
    "E",
    `LEHFIIRXLIIEVRIWXAMWLSJKSZIVRQXXSFVMRKXLITISTPISJXLSWIGSYRXMIWXSEWIRWISJXLIMVHYXCFCQMPHPIRMIRXQIERWXLEXJSVXLITYVTSWISJVITVIWIRXMRKXSXLIMVWSFIVVIJPIGXMSRXLIJEXEPGSRWIUYIRGIWSJWYGLGSRHYGXGSQQMWWMSRIVWLEHFIIRWIRXEQSRKWXXLIQXLEXXLICQMKLXFIAEVRIHMRXMQISJALEXQYWXJSPPSAMJXLICTIVWIZIVIHMRXLIMVSTTSWMXMSRXSXLIPEAWFYXXLEXGSIVGMSRASYHRSXFIVIWSVXIHXSIBGITXMRXLIHIVRMIVVIWSVXFYXXLEXXLIWIEWSRSJXLICIEVQEHIMXMRHMWTIRWMFPIXLEXTVITEVEXMSRJSVMXWLSYPHOIITTEGIAMXLXLITVSTSWMXMSRWXLEXLEHFIIRQEHIXLEXMXAEWYRRIGIWWEVCJSVQIXSIRYQIVEXIXLIXVERWEGXMSRWSJXLSWITISTPIEWXLICVIPEXIHXSXLITVSGIIHMRKWSJKSZIVRQIRXJSVEWQYGLEWXLICORIAXLIQEWAIPPEWMHMHXLEXXLIQIEWYVIALMGLXLICAIVIRSXAMXRIWWXSXLIEHSTXMSRSJAEWRSXPIWWTEMRJYPXLERIBTIRWMZIAEWMRGSRZIRMIRXHMWXVIWWMRKMRIZIVCTSMRXSJZMIAFYXEWMGSRWMHIVIHXLIWYTTSVXSJXLIPEAWEWERSFNIGXSJXLIJMVWXQEKRMXYHIERHXLIKVIEXIWXTEVXSJXLIIBTIRWILEHEPVIEHCFIIRMRGYVVIHXLEXRSXLMRKWLSVXSJXLIQSWXYRIUYMZSGEPTVSSJWSJEFWSPYXIWYFQMWWMSRWLSYPHVIXEVHXLIQEVGLSJXLIEVQCMRXSXLIAIWXIVRGSYRXMIWMRSVHIVXSGSRZMRGIXLIQXLEXXLIKS`,
  ],
  [
    "LW",
    `PJZEDALJODLOEALJONPIPIMACSSWELPWNAEDPNPILUMATJDEWAYYPWDBLNLOAKDOTXWAHEEDZQEOFNCAYZPNMAZJRKZZEACIDSTPSWWHAACOZJDOAALGJKFNENFPSMFEPPWULJOYWALNWULJOHTOEAYPZKEDPNDAGAYPSAOQWHLJOERJZNLJEPSAJPZKSWGAEDPECOEKCULRZEOHZQOWYZLCRNPODEGAAACOZJDPSAJWCAGAIWEEZQDPZPSADLTNTPTBJKFYZIAWCAJKFNDAWBHEEDZPSACUZQXWJXPYZIPRLEYWYZMEEPPNQKCWWSLUDPSACAHEWHMARNPWEACWYZWADOPNAACOZJDPSWYUZQCOPHQAYFZUJKFNLYSEPRPIPJEOLOHAWHLOJKFNAHLJDGPAAEYPPNPOEAOEYUZQCKHJNWCAPNSKHAGACDFIMHPEEEDWCALHAKDOPODEZJTJEDPYSWYCTJRBZNEQYADKQPTIPAIACYTOPYLQEEZJTJJKFNMQDEYADOLBQWTNDBZNEDPSZNWZTOQQWHZBENTYVACUMQEHPPEDTOYKEXWEYZJKFPZSSWERTNEQPPSACATOXWYUAACOZJDOENTRPBZNSERDTZPWWOLJOAGACUHDPNPHTBPEDBFHWKQDPNZEDIMAJKFNDAWBPOAANELHWUOKYKEBPERJLBQANPTKYJPEEDPNMANUYENWWWMKFPWKGAQKCEYPSAQWNAZBLHWWCEOEEULJOZTOPJNDLJEIPJEEEEDLPNPJYELHLOEDPCCWDOEWVAVEYZWUEDPYZQYOPHZBEDPUPWCORNLYPBFHWUDQCNPJOACEYCEDPPSEYCDKQUZQEDYQCPFNPOENPJRPSKQOAECEEPZOSEPHOUZQTJDQOZPJXEDBZNEQYAMQEZZJZPOEDPCADOJKFNDAWBHEEDTILCTJTJROXWYUQALNDWCAMKCJZBQWEERQPWYZWKYAWEYADOMAJKYZLSSKWADKXAOE`,
  ],
  [
    "AW",
    `OQBPYKUXUPMWKAAHLKWWNYEBONTDEERZOQBPIJGPOKIBYKUYAJWWIPAJDJOPBATERADXYSAETENCONBAIJGHIADWBKUPDKNPDAAHIJLEEOONBAIJGDAPEZDKNPGEVAWWYPODAPIJGWNZYATZOJTHOKKPOKGKOZNKRPAHKPOKWESAIBYKUYAJDNEWMWNZNKTIAGEZRAAISUOQRIAOTAREFUOQCWNPHENGAJDJOPMWKATDOQGDTOYKUNAEMEFUOQCWNIEATSIPHPREUIPDAJDZIOAOTARWNZTNEWTPHKSATSOEMLOOTKROJQSPTDEOAIEEFUOQCWNXEWRPODEWRPHATNUPHUOQVASLOGEJTSIOTADXYGNWVASPOIAGEWTNALFKRBOKLOONWWTYHPHATDIJGOYKUCAREUOQRHIBEPOXRKKANWNZSPOKPWNZBQIHDAMQPSIPHSONNKUPTKOHSEFUOQCWNIAGEKNAHAALOBAHLUOQRSIJNENCSWNZRESGIPOJOJEPUNNKFLIPCDAJDPOOSWNZLKSAAJDOTWRPACAENWTUOQRXECIJNENCSWNZNAVARXRAAPHAASONDWBKUPYKUNLKSOIBYKUYAJFKRYEUOQRDEWRPAJDJENVAAJDOIJESTKSARREUOQRPUNNHOJGWFPENTDEUANECOJEWNZSKHKLZOJWDEJTDENEESJOPHENCIJYKUAXYELTPHAWELHWDIYHOAUSPOPHAMDOHDKNEFUOQCWNPAHKSIPHYRKWZSWNZKAELYKUNVERPUAONWWLGWETDKENCSJONLKSATDEYOIMKNPOQCDIBNAIPHARBOASJONLKVENCFNIANZSYAJHQRPYKUEFWLHMANYOQNPWETDYKUXUPNKNATKOIUYHEFUOQCWNBIHLPHAUJFKRCIRIJGIIJUPESIPHOITTUSACKNZSSONTDOBDESPAJCARQNUOQROIOTDEAANTDAJDAVARUTDIJGPHWTOIJIPAJDSHE`,
  ],
  [
    "RMFBO",
    `EAWJHPAKUVVFTUOCBTQICMYJCEAKUVVOTNAFZBFOCFMXVZOMJBTXZESJZJBFCKGJZCUTODVAUMSRXRPGKFBPHYUWEGFRYISDUSJBUUFUVVOTNAFZBFOCFMDODQNOHFQCJGKQSDSZZBISENWJHRUSHOMQNORVBJORVZHFHFRTVFFRNUGDAXUWDBTSHRZYDCCASJSJOFOOUMXPIKTFGFZOFBIJFWBZZMFOREQBASRXFORKTJGWMQHPIEFWJSJPJDWUQIUVRFFMHYAZHVVMHIKREFOWEPJQSEPJOHJFFUSKTJZVRPFMCKAKUVZZLTWEOTNAFZUBFKUHVZRDQZOTARNCEOZMHLDFMVVDNUOXQFORKTJZKFGQEQFZYJBLQYPYVQUDZFEJMWEWXJBRXTUCWRNFZUEYISPMQTCRSWFSUFMBHKTJLWESTGSESQBBUITVZUNJUVVEDNPFXNDVVMIPTJFFUSVHJOWWQFDVTAZOHIKBBGWDJFHFSTWSIZNUGVXKJBKTJXOPUYXOEFJEHFMKUSIFMFGVOTORNAWMRNMWNCJFTGPIUYBWEEHPZFZNFGSQHBAVUSESGQSESEFFORDAXUQYAXFHFNJDCDQRFASQWTCWFMFQFYRPBNQFMHYIMFBKTJZRZPXPVFIJWSIUSEWROFVGVPFQFFNQFAZZGZGRKNOUZFBJGYQIUCIQRBWEUSUVVOTNAFZBFOCFMCIKNJDCDQFSSGGGMWTAGWWFGXMMZRNORZMGFQRYJBFVBZCZZOYISBUSHCWNWJHRUSDCLXIOCKOTOHZZZFHFNJISRPTGGKMYFSMQSTMDNTMWTMQMMWAWUIEMYFZPOTNAFZBFOCFMMSRPJSGTMRFIGINUVRETMIKUTOOEPXJBTQYISEEYBHVEBIWTTGFZFZLUCKTJDCDYTOKVMQUVYMAFPVQSGFVQYPQYATTSRZDGCIYTGRVYTDFRFNDQFZXUWKGYJCEENYHVQSPTKTJNWEOQVRZZLDOEMIBO`,
  ],
  [
    "IHQMJM",
    `QVDUCIIZOADZONUAASMDQEQUVNJAWNIYUXHKMHHEXXLHJFQQBPCQCTMNEHNDVVHFXXLNUAASMAESXMVKVUWPBOURAQVJXMWPOPLQCTMTQERYXSUYNEAHWQUQICUFQQZLWUXZQTCQMUIAUXHAZNUFAQIKORXDJHJFUQEHDFRZOAEENDDLQZMBTLQENTQZQGCTWYYFRQANUAASMKYPJEPLMMBFWSTTNIMUJAEQZAXQVACUJMRZADYFQMATQXUMZTORXGVKJTNRZLDOQMVKFMBEMKEZCTMNEHNDVVHEVQAZQSNNCAERLACYIQCTMMHQWOPKYPWABDYEQFWSUMEQQUUHRFIIBKCTMJEZOXQJJPNHMSEBNPQUJAJIIYAZXIVHIFQQNYUZLTIUTUWPQHDIJDBOQFREBOURAQVJXMWPAVCQRZLPQZJXTPUEOUOOJUWSBOUNAUBPITLATVDUJXAMEDPQWYWQRFEHIMMUNMYODXBAYYNFWJKFJXWUWECAZFITXDBPJIJEBOUAWXGAYYNUVOYEUUNLJTJFPLXMMFWZKDAQVKUDJZIYCKJFNVHFWQKLIERFGUUMAFPLVAAWAVVFQQWOYARZBOQFKMBABQPQWYWQWQIYBKMULUJNNOWTUFQQNPHECBZLIUMQVAERCTMBDUCQLZJMCQAOYEJDUFMMBECYHADZLLTNHFPLVDNZKOQZMUVKYMWEJHTXHACADGVNMYUPBAPLXMMFWZKDAQVKUDCTMMEDCXCJAUUKNVHTRYBOURAQVJXMUXWDUPQUUHDPQUAHHYHFWSUMEQEPJTCTMPHTXDALIMWPOBDECTMIQFCXMOQPKQMUBABFJBJFQQMUWXREPDXAFQZLCAAQVBCQAACZUHNZBBQXUKEVDFQQEHHFQQNYUZLTIUTUWPQHDIJDEHIMUQIYDUWSMEFQAUMUSQOAZNUAASMVDQCTIAXQFACSTXJFMYUJYXWPJUWFPLMMARWYQYNDQJQZRZLLFQWPMUSQ`,
  ],
];

describe("getKeyword", () => {
  testCases.forEach(([keyword, ciphertext], index) => {
    // if (index !== 1) return;
    it(`${index} should return ${keyword} for ${ciphertext.slice(0, 35)}...`, () => {
      expect(getKeyword(ciphertext, keyword.length)).toEqual(keyword);
    });
  });
});
