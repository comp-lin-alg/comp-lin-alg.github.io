Search.setIndex({docnames:["L1_preliminaries","L2_QR_factorisation","L3_analysing_algorithms","L4_LU_decomposition","L5_eigenvalues","L6_krylov","cla_utils","errata","exercises","index","practicalities","tools"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["L1_preliminaries.rst","L2_QR_factorisation.rst","L3_analysing_algorithms.rst","L4_LU_decomposition.rst","L5_eigenvalues.rst","L6_krylov.rst","cla_utils.rst","errata.rst","exercises.rst","index.rst","practicalities.rst","tools.rst"],objects:{"":{cla_utils:[6,0,0,"-"]},"cla_utils.exercises1":{ABiC:[6,1,1,""],basic_matvec:[6,1,1,""],column_matvec:[6,1,1,""],rank1pert_inv:[6,1,1,""],rank2:[6,1,1,""],time_matvecs:[6,1,1,""],timeable_basic_matvec:[6,1,1,""],timeable_column_matvec:[6,1,1,""],timeable_numpy_matvec:[6,1,1,""]},"cla_utils.exercises10":{GMRES:[6,1,1,""],arnoldi:[6,1,1,""],get_AA100:[6,1,1,""],get_BB100:[6,1,1,""],get_CC100:[6,1,1,""]},"cla_utils.exercises2":{GS_classical:[6,1,1,""],GS_modified:[6,1,1,""],GS_modified_R:[6,1,1,""],GS_modified_get_R:[6,1,1,""],orthog_cpts:[6,1,1,""],orthog_proj:[6,1,1,""],orthog_space:[6,1,1,""],solveQ:[6,1,1,""]},"cla_utils.exercises3":{householder:[6,1,1,""],householder_ls:[6,1,1,""],householder_qr:[6,1,1,""],householder_solve:[6,1,1,""]},"cla_utils.exercises4":{cond:[6,1,1,""],operator_2_norm:[6,1,1,""]},"cla_utils.exercises5":{back_stab_householder_solve:[6,1,1,""],back_stab_solve_R:[6,1,1,""],backward_stability_householder:[6,1,1,""],randomQ:[6,1,1,""],randomR:[6,1,1,""],solve_R:[6,1,1,""]},"cla_utils.exercises6":{LU_inplace:[6,1,1,""],get_Lk:[6,1,1,""],inverse_LU:[6,1,1,""],solve_L:[6,1,1,""],solve_U:[6,1,1,""]},"cla_utils.exercises7":{LUP_inplace:[6,1,1,""],det_LUP:[6,1,1,""],perm:[6,1,1,""],solve_LUP:[6,1,1,""]},"cla_utils.exercises8":{Q1AQ1s:[6,1,1,""],ev:[6,1,1,""],hessenberg:[6,1,1,""],hessenbergQ:[6,1,1,""],hessenberg_ev:[6,1,1,""]},"cla_utils.exercises9":{get_A100:[6,1,1,""],get_A3:[6,1,1,""],get_B100:[6,1,1,""],get_B3:[6,1,1,""],get_C100:[6,1,1,""],get_D100:[6,1,1,""],inverse_it:[6,1,1,""],pow_it:[6,1,1,""],pure_QR:[6,1,1,""],rq_it:[6,1,1,""]},"cla_utils.gstools":{cgs:[6,1,1,""],mgs:[6,1,1,""]},cla_utils:{exercises10:[6,0,0,"-"],exercises1:[6,0,0,"-"],exercises2:[6,0,0,"-"],exercises3:[6,0,0,"-"],exercises4:[6,0,0,"-"],exercises5:[6,0,0,"-"],exercises6:[6,0,0,"-"],exercises7:[6,0,0,"-"],exercises8:[6,0,0,"-"],exercises9:[6,0,0,"-"],gstools:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:function"},terms:{"0x_":2,"0x_1":2,"0x_2":2,"100":[0,2,4],"100x100":6,"12345678":2,"1940":2,"1950":2,"1986":5,"200":0,"2020":7,"2mn":2,"2px":2,"2v_k":[1,2,4],"2x_1":1,"308":2,"3x3":[4,6],"400":0,"4mk":3,"4th":0,"5th":0,"9999":2,"break":1,"case":[0,1,2,3,4,8,11],"class":[0,2,4,11],"default":[2,6],"final":[2,3,4,5,6,7],"float":[3,4,6,9],"function":[0,1,2,3,4,5,6,8],"h\u00f6lder":2,"import":[0,1,2,3,4,8,10,11],"long":[1,2],"new":[1,4,8,11],"null":0,"public":[7,11],"return":[0,1,2,3,4,5,6],"super":4,"throw":1,"true":[0,3,4,6],"try":[1,2,3,4],"while":8,ACE:2,Added:7,But:[2,4,5,11],Doing:6,FOR:[1,2,3,4,5],For:[0,1,2,3,4,5,6,8,11],Not:11,One:[1,2,4,5,11],RHS:6,That:11,The:[0,1,2,3,5,6,8,9,10],Then:[0,1,2,3,4,5,6],There:[0,1,2,4,5,7,8,11],These:[1,2,3,5,8],USING:4,Use:11,Using:[2,3,4,5,9],With:4,_1a:4,_2e_1:[1,4],_ir:0,_iv_i:2,_iy_i:0,_ny:5,a100:6,a_1:[0,1,3,4],a_1l_1:3,a_1q_1:4,a_1x:3,a_2:[0,1,3,4],a_2q_2:4,a_3:[1,3,4],a_i:[0,1],a_j:[0,1],a_k:[0,1,3,4],a_m:4,a_mq_m:4,a_n:[0,1,3],aa100:6,abc:2,abic:[0,6],abl:4,about:[0,2,3,4,5,8],abov:[0,1,2,3,4,5],absolut:[1,2,4],abx:2,ac_j:0,acceler:4,access:[0,9],accord:[1,4],accordingli:8,account:[2,11],accredit:9,accumul:1,accur:[2,4],accuraci:2,achiev:1,acknowledg:2,acquir:10,across:10,act:2,activ:[0,5,9,11],actual:8,add:[0,2,4],added:2,adding:[0,2],addit:[1,2,10],addition:3,address:11,adjac:2,adjoint:[4,9],adopt:11,advantag:[0,4,9],ae_1:3,after:[1,3,4,5],again:[0,3,4,5,11],agre:8,ahat:6,ahead:11,aim:[2,4],ainv:6,alern:4,alg:8,algebra:[0,1,3,4,5,8,9,10],algorithm:[0,5,6,8,9],all:[0,1,2,3,4,5,6,7,8,10],alloc:[1,4],almost:[2,5],alon:1,along:[4,8],alpha:[0,2,3],alphabet:8,alreadi:[0,1,2,3,4,5,8],also:[0,1,2,3,4,5,8,10,11],alter:[4,5],altern:[1,2,4,5],alwai:[2,3,4,8,11],amount:[2,3],amplifi:3,analog:[2,3],analys:9,analysi:[0,1,2,5],angl:5,ani:[0,2,3,4,5,8,11],annoi:4,announc:10,anoth:[0,1,2,3,4,9],answer:2,anyth:8,anywai:11,apologis:2,appear:[3,4],append:4,appli:[1,2,3,4,5,6,10,11],applic:[0,4,9],approach:[2,4],appropri:[0,1,4,8],approv:10,approx:[2,4,5],approxim:[2,4,5],aq_1:4,aq_2q_1:4,aq_n:5,aq_ni:5,ar_1x:3,arbitrari:[0,2],argument:[0,1,3],aris:[2,5],arithmet:[0,1,9],arnoldi:[6,9],around:11,arrai:[0,1,3,4,6,7,11],art:[5,11],ask:2,aspect:2,aspir:2,assess:9,assign:0,assimil:10,assum:[1,3,4,5,6,8,9],asymptot:[2,3,5],atom:11,attempt:0,augment:1,auto:11,autom:8,autumn:7,auxiliari:4,avail:[0,1,2,3,4,5,9,11],avoid:[0,1,4,5],awai:[1,4],awar:11,ax_i:[1,6],ax_n:5,axiom:[2,3],b100:6,b_1:[1,3,6],b_2:[1,6],b_3:4,b_i:[0,1,3,6],b_j:0,b_k:[1,3,6],back:[1,2,3,4,6,8],back_stab_householder_solv:[2,6],back_stab_solve_r:[2,6],backup:11,backward:[3,4,6,9],backward_stability_household:[2,6],bad:[1,2,3],band:3,bandwidth:3,bar:[0,3],base:[1,2,4,8,9,10,11],bash:[0,8,11],basi:[0,1,4,5,6],basic:[0,3,5,6],basic_matvec:[0,6],bau:[2,9],bb100:6,beaten:3,beauti:2,becaus:[0,1,2,3,4,5],becom:[1,2,3,4,5],been:[0,1,2,3,4,5,7],befor:[0,1,2,3,4,5,6,11],begin:[0,1,3,4,5],behaviour:[2,4,5],being:[0,1,2,4,8],below:[1,2,3,4,5,6,9],best:[0,4,8],better:[1,2,11],between:[0,1,2,8],beyond:1,big:1,bilinear:0,bin:8,binari:2,biologi:5,bit:[3,4,11],blackboard:9,blend:2,block:[1,3,4],blogg:11,bloggs12:11,bonu:4,both:[0,2],bottom:4,bound:2,box:8,bracket:2,branch:9,brief:11,briefli:1,broad:4,bug:11,build:[1,2,3,4,5,8],built:[0,1,2],builtin:6,button:8,c100:6,c_0:5,c_0b:5,c_0i:5,c_1a:5,c_1ab:5,c_1z:5,c_2a:5,c_2z:5,c_j:0,calcul:[0,2,4],call:[0,1,2,3,4,5,6,8,11],can:[0,1,2,3,4,5,6,8,10,11],cannot:5,canon:[0,1,4],cap:0,carlo:3,carpentri:11,carri:3,cast:0,catastroph:2,cauchi:2,caus:[1,2,4,5,8],cc100:6,ccc:0,cdot:[0,2],cdt:10,central:3,certain:11,cgs:6,challeng:5,chang:[0,1,2,3,4,5,11],chapter:11,characteris:[2,3],characterist:4,cheap:[4,5],cheaper:[1,3,4,5],cheapli:3,check:[0,1,3,4,5],checkout:8,chip:2,choic:[1,3,4],choleski:9,choos:[1,3,4],chosen:[1,2,4,5],cla_install_venv:8,cla_install_venv_win:8,cla_util:[0,1,2,3,4,5,7,8,9,11],claim:3,clariti:8,classic:[6,9],classroom:[7,8],clean:8,clear:[1,8],clearli:4,click:[8,11],clone:9,close:[4,8],closer:4,closest:4,cluster:5,code:[0,1,2,3,4,5,9,10],coeffici:[0,1,2,4,6],colin:[9,10],collect:8,colleg:[9,11],color:11,colour:11,column:[0,1,2,3,4,5,6],column_matvec:[0,6],com:11,combin:[0,1,2,3,4,6,11],come:[1,4,5],command:[0,8,9],comment:9,commit:[0,2,8],common:1,commun:8,commut:3,comp:8,compact:3,compar:[0,2,4,8],comparison:[2,4],compat:0,compil:0,complement:[1,6],complementari:[0,1],complet:[1,2,3,5,8,9,10,11],complex:[0,1,4,5],compon:[2,4,6,9,10],compos:2,composit:2,compris:[4,10],comput:[0,1,3,4,5,6,9,10],concentr:2,concept:[0,2,3],conceptu:1,conclud:4,cond:[2,6],condit:[1,4,5,6,8,9],conduct:10,confid:11,config:11,confirm:4,conflict:11,confus:5,conj:7,conjug:0,consecut:3,consequ:[0,3],consid:[0,1,2,4],consider:2,consist:1,constrain:2,constraint:2,construct:[1,2,3,4,5,7,9],contact:10,contain:[0,1,3,4,6,8,10],content:[2,9],context:11,continu:[3,4],contrast:3,control:[1,3,11],convei:8,conveni:11,converg:[4,6,9],convers:0,convinc:2,copi:[0,1,3,4,7,9,11],core:[1,11],corner:[3,4,5],correctli:[0,11],correspond:[2,3,4,5],cos:5,cost:[0,2,3,4,5],cotter:[9,10],could:[1,2,3,4,5,11],count:[3,4,5,8,9],cours:[0,1,2,4,5,8,9,10,11],coursework:[7,10],covid19:11,creat:[1,3,4,8,11],creation:8,criteria:[4,6],critic:0,crucial:[1,8],cubic:[3,4],current:[8,11],curv:0,cut:4,d100:6,dagger:0,dai:2,data:[0,1,2,4,5,10],dataset:1,date:[7,11],ddot:[0,1,3,4,5],deal:0,debug:[8,11],debugg:8,decid:[3,4],decompos:1,decomposit:[4,9],decoupl:4,deduc:[2,4],defect:4,defin:[0,2,3,4,5],definit:[0,1,2,3,4,5],deflat:4,degener:4,degre:[1,4,5],delta:[2,3,4],delta_:0,denot:0,dens:5,depart:[10,11],depend:[1,2,4],deriv:[0,2,3,4],describ:[0,1,2,4,6,8],descript:[2,7,8],design:[1,4],desir:5,desktop:11,destroi:4,det:[0,3,4],det_lup:[3,6],deta:6,detail:3,determin:[0,1,3,6],develop:[3,4],diagon:[1,3,4,5,6],diagonalis:[4,5],dial:4,did:[0,2],didn:11,differ:[1,2,3,4,5,8,11],differenti:10,difficult:2,dimens:[0,2,4,5,6],dimension:[2,5,6],direct:[0,1,4],directli:[2,4],directori:[0,1,2,3,4,5,8],disaster:2,discret:2,discuss:[0,1,3,4,9],distanc:2,distinct:[0,4],distribut:4,div:2,divid:[2,3,4],divis:[2,3],docstr:[4,5],document:[0,4,9],doe:[0,1,3,4,5],doesn:[1,3,4],doing:[1,2,3,4,10],domin:[2,3,4],don:[0,1,4,5,7,11],done:[1,2,3,6,8,11],dot:5,doubl:[0,2,6,11],down:[2,4],download:8,downward:1,dramat:4,drop:[2,8],dropdown:8,due:[1,2,3,5,7],dure:[1,2,3,8,11],dynam:10,e_1:[0,1,3,5],e_2:[0,1,3],e_3e_9:3,e_j:[0,3],e_k:[2,3],e_m:[0,4],e_n:1,each:[0,1,2,3,4,5,6,10],earli:[0,1,2,8],earlier:[0,1,5],earth:10,easi:[2,4,11],easier:[2,4,8,11],easiest:[1,4],easili:[1,4],edit:[4,6,9],editor:[8,11],educ:4,effici:[1,2,3,5],eig:[2,4],eigenspac:4,eigenvalu:[0,1,2,5,6,9],eigenvector:[4,5,6],either:[1,2,4,6,11],elect:10,element:[0,1,3,4,5],elementari:6,elimin:3,els:[5,8],elsewher:3,email:11,embed:8,emerg:0,emphasis:[0,3],emploi:[3,8],empti:1,enabl:[3,11],encod:4,encount:[1,3,4,8],encourag:8,end:[0,1,3,4,5],enforc:2,engin:[4,5,8],engulf:4,enrol:10,ensur:[1,10],entir:[0,3,5,6],entri:[0,1,2,3,4,5,6],environ:[0,8],epsilon:[2,4],equal:[0,2,3,4,5,6],equat:[0,1,2,3,4,5,10],equival:[0,1,2,3,5,9],errata:9,error:[0,1,2,3,4,5,7,8,11],especi:[2,8],essenti:[4,5,11],estim:[2,4,6],etc:[0,2,5,11],euclidean:0,evalu:2,even:[2,3,4,5],eventu:[1,11],everi:[2,3,4,8],everyth:[0,1],everywher:5,exact:2,exactli:[0,2,4,11],examin:[0,1,2,4,5],exampl:[0,1,2,3,4,6,8,10,11],exce:6,except:[0,1,3],exchang:[3,6],execut:[0,5,11],exempt:10,exercis:[0,1,2,3,4,6,7,9,11],exercises10:[5,9],exercises1:[0,9],exercises2:[0,1,9],exercises3:[1,2,9],exercises4:[2,9],exercises5:[2,9],exercises6:[3,9],exercises7:[3,9],exercises8:[4,9],exercises9:[4,9],exhibit:11,exist:[0,2,3,4],expand:[0,4],expans:[0,4],expect:[0,1,2,4],experi:[2,3,4],experienc:8,explain:[0,1,2,3,4,5],explan:4,explicit:[3,4],explicitli:[1,3,5],exploit:[3,4,5],explor:[3,4],express:[0,1,2,3,4],extend:[0,1,3,4],extens:2,extra:[3,4,5],extract:[1,4],eye:4,f_l:2,facil:11,fact:[0,1,2,3,4],factor:[1,3,4,6],factoris:[0,2,5,6,9],fail:[3,7,8,11],failur:8,fals:6,famili:3,familiar:[3,8,10,11],far:[0,1,2,4],fast:[4,5],faster:[0,2,4],featur:[4,11],feedback:[9,10,11],few:[0,2,4,5,8],field:0,fifth:0,file:[8,11],fill:4,find:[0,1,2,3,5,6,8,9,11],finish:[0,1],finit:[2,4],first:[0,1,2,3,4,5,6,8,10,11],fit:[0,1],fix:[1,2,3,7,8,11],flexibl:0,flop:[2,3,4],fluid:10,focu:[2,3,5],focuss:11,follow:[0,1,2,3,4,5,8,11],foral:[0,1,2,3],forget:[0,1,4,5],fork:[0,8],form:[0,1,2,3,5,6,9],formal:2,format:[1,2,11],former:3,formul:[0,3,5,6],formula:[0,1,2,4,5],forward:[2,3],found:[0,1,4,8],four:[0,4],fourth:[2,10],frac:[1,2,3,4,5],framework:8,free:[1,5,11],frequent:0,frobeniu:2,from:[1,2,3,4,5,6,8,9,11],full:[0,1],further:[1,2,3,4,5],furthest:1,fuse:2,galoi:4,gap:2,gaussian:3,gener:[0,1,2,3,4,5],generalis:[2,3,5],geometr:[1,4],geq:[0,3,4],get:[1,2,3,4,5,6,9],get_a100:[4,6],get_a3:6,get_aa100:[5,6],get_b100:[4,6],get_b3:6,get_bb100:[5,6],get_c100:[4,6],get_cc100:[5,6],get_d100:[4,6],get_lk:[3,6],gist:9,git:[8,9],github:[8,9],give:[0,1,2,3,4,5,6,11],given:[0,1,2,3,4,5,6],global:11,gmre:[1,6,9],goal:[1,4,5],going:[4,8],golub:[3,9],good:[1,5,11],goodi:11,gradual:1,gram:[4,5,6,9],graph:[4,5],great:3,greater:4,group:[1,5],grow:[3,5],growth:3,gs_classic:[1,6],gs_modifi:[1,6,7],gs_modified_get_r:[1,6],gs_modified_r:[1,6,7],gstool:9,guarante:4,guess:6,guid:[4,11],h_k:5,h_n:5,half:1,hand:[0,1,3,4,5,6],handi:11,happen:[1,2,4,5,11],has:[0,1,2,3,4,5,6,7,8],hat:[0,1,2,4,5,7],have:[0,1,2,3,4,5,7,8,11],haven:11,hell:9,help:[3,4,8,10,11],henc:[0,1,2,3,4,5],here:[0,1,2,3,4,5,7,8,9,11],hermitian:[1,3,4,6,9],hessenberg:[3,5,6,9],hessenberg_ev:[4,6],hessenbergq:[4,6],high:[5,10],his:10,histori:1,hold:4,home:2,hope:4,hopefulli:[2,5],host:11,household:[3,4,5,6,9],householder_l:[1,6],householder_qr:[1,6],householder_solv:[1,2,6],how:[1,2,3,5,9,11],howev:[1,2,3,4,5,8],http:11,hub:11,hyperplan:1,hypothesi:4,icon:11,idea:[0,1,4,5],ident:[0,1,3,4,6],identifi:3,ignor:2,il_:3,ill:[2,4,5],illustr:1,imag:10,imaginari:[0,6],immedi:[2,4],imperi:[9,11],implement:[0,1,2,3,4,5,6,8,10,11],impli:[0,2,3,4,5],implicit:[1,2],importantli:5,imposs:4,improv:[1,2,3,4],includ:8,incomplet:2,incorpor:4,increas:[3,5],inde:3,indent:1,independ:[0,2,4],index:[0,8],indic:[3,4,6,7],individu:2,induc:2,induct:[3,4],inequ:[0,9],inexact:1,infer:6,infinit:4,inform:[0,4,8,11],infrastructur:8,infti:[2,4],ingredi:1,initi:[4,6],inner:[1,2,9],input:[0,2,3,4],insid:[2,3,4],insight:1,instabl:[1,5],instal:[8,11],instanc:10,instead:[0,1,2,3,4,5,6,7,8],instruct:11,int_1:2,integ:6,integr:[2,3],intellig:8,intend:7,interest:4,interfac:[3,4],interfer:8,interlac:1,intermedi:1,interpret:[0,2,4,5,9],interv:2,intrepret:5,introduc:[0,1,2,3,5],inv:0,invers:[1,2,3,6,9],inverse_it:[4,6],inverse_lu:[3,6],invert:[1,2,3,5,9],investig:[1,2,4,5,6],involv:[0,2,4,5,8,11],issu:[3,9],iter:[0,1,2,3,6,9],ith:6,its:2,itself:[0,2],jacobian:2,jane:11,jim:2,jmc:10,job:1,join:1,jth:[0,1],just:[0,1,2,3,4,5,6,8,11],k_1:4,k_1q_1:4,k_2q_2:4,k_m:4,k_n:5,kappa:[2,5],keep:[1,2,3,4,8],kei:[0,1,2,4,5,8],kernel:0,kind:0,kmax:[1,6],know:[1,2,3,4,5,11],knowledg:9,known:2,kramer:2,krylov:9,kth:[1,2,5],l_1:[2,3],l_1a:3,l_1p_2:3,l_2:[2,3],l_2l_1:3,l_2l_1a:3,l_2p_2l_1p_1:3,l_3:3,l_3p_3l_2l_1p_2p_1:3,l_ie_i:3,l_k:[3,6],l_ke_k:3,l_kx_k:3,l_n:3,lab:9,laboratori:2,lagrang:2,lambda:[2,4,5],lambda_1:4,lambda_1q_1:4,lambda_2:4,lambda_2q_2:4,lambda_j:4,lambda_m:4,lambda_n:4,languag:[10,11],laptop:11,larg:[1,2,3,4,5,8],larger:[0,3,4],largest:[2,3,4,5],last:[2,3,4,5],late:2,later:[0,1,2,3,4,5,8],latter:[3,5],ldot:[0,1,2,3,4,5,6],lead:[2,3,4],learn:[2,3],least:[2,3,4,5,6,9,11],leav:[1,4],lectur:[2,8,11],led:[9,10],left:[0,1,2,3,4,5,8],leftrightarrow:3,length:[0,1],leq:[0,1,2,4,5],let:[0,2,3],level:[2,10],like:[0,2,3,5,8,11],lim_:2,limit:[0,2,4],lin:8,linalg:[0,1,2,4],line:[0,1,2,4,8,9],linear:[0,1,3,4,5,6,8,9,10],linearis:2,linearli:[0,4],link:[9,11],linux:[8,11],list:[4,7],littl:11,loan:[3,9],local:9,locat:[8,11],log:[4,11],logic:6,loglog:4,london:9,look:[0,2,3,4,5],loop:[0,1,2,3,4,5,6],lose:8,loss:1,lot:[3,8,11],low:[3,5],lower:[2,3,4,6,7],lu_inplac:[3,6],lup:[3,6],lup_inplac:[3,6],lux:3,lvec:6,lx_i:6,lx_k:3,lxm:6,mac:[8,11],machin:[2,8,9],maco:11,made:[1,2,3,7],magnitud:[2,3,4,5],mai:[1,2,4,7],main:[1,3,8],mainli:5,major:5,make:[0,1,2,3,4,5,8,11],manag:[3,11],mani:[0,11],manipul:[0,4],manner:4,map:[0,4],mapsto:[0,2,4],mark:[2,8,11],massiv:1,master:[8,10],masteri:9,materi:[2,3,4,5,9,10],math96023:9,math97032:9,math97140:9,math:[0,11],mathbb:[0,1,2,3,4,5],mathcal:[1,2,3,4,5],mathemat:[1,2,3,4,8,9,10],matlab:[10,11],matplotlib:4,matric:[1,2,3,5,6,9,11],matrix:[1,4,5,6,9],matrix_rank:0,matter:[1,9],matvec:6,max:[2,3,6],max_:3,maximis:3,maximum:[0,2,3,6],maxit:6,mbox:[0,1,2,3,4,5],mean:[0,1,2,3,4,11],measur:[0,2,4],mechan:11,memori:[0,1,2,3],mention:[1,2],merg:7,mess:3,messag:[2,11],method:[1,2,3,4,9,10],mgs:6,midpoint:1,might:[4,8,11],min:[0,2,3],min_x:1,minim:[5,11],minimis:[1,2,5,8],minimum:5,minu:2,minut:8,mode:8,model:0,modern:1,modif:[0,4],modifi:[3,5,6,8,9],modul:[9,10,11],moment:3,mont:3,more:[0,1,2,3,5,8,11],most:1,motiv:[1,4],move:[1,3],mpq:3,mr_:2,mre:10,msc:10,much:[0,1,2,3,4,5,11],multipl:[1,2,3,4,5,6,9],multipli:[0,1,2,3,4],must:[0,1,2,3,4,10],mutual:1,mxk:6,mxm:6,mxmaxit:6,mxn:6,mxnit:6,n_1:5,na_:2,nabla:4,name:[1,5,8,11],nation:2,natur:0,navig:11,ncond:6,nearest:[1,2,4],nearli:2,neat:5,necessari:[0,3,5],need:[0,1,2,3,4,5,8,10,11],neg:1,neq:[0,2,3,4],nest:0,never:[2,5,8,11],next:[0,2,3,4,5,11],nice:11,nit:6,nobodi:8,non:[1,2,3,4,5],none:6,nonlinear:2,nonsingular:[0,4],nonsymmetr:4,nonuniqu:1,nonzero:[1,3],norm:[1,4,5,6,9],normal:4,normalis:[1,4],notat:[0,1,3],note:[0,1,2,3,4,5,7,8],notic:[0,1,3],notin:0,now:[0,1,2,3,4,5,7,8,11],nth:5,nullspac:9,number:[0,1,3,4,5,6,9],numer:[1,2,4,5,7,9],numpi:[0,1,2,3,4,6,7,11],nx_:2,nxn:6,o2norm:6,object:[0,8],observ:[0,3,4,5],obtain:[1,2,3,4,9],obviou:4,obvious:[8,11],occur:8,odot:2,off:[1,2,3,4],offici:11,often:[0,1,2,3,5,8],ominu:2,onc:[3,5,11],one:[0,1,2,3,4,5,8,10,11],ones:[1,3,6,7,8],onli:[0,1,2,3,4,5,10],onlin:11,onto:[0,1,5,6],oper:[0,1,3,4,6,8,9],operator_2_norm:[2,6],oplu:2,opportun:[1,3,8],opposit:1,optimis:[1,2,5],option:[4,8,11],order:[1,4,8,11],orient:0,origin:[2,4,8],orthog_cpt:[0,6],orthog_proj:[0,6],orthog_spac:[1,6],orthogon:[1,2,4,5,6,9],orthogonalis:[4,5,6,9],orthonorm:[1,4,5,6,7,9],other:[0,2,3,4,8,10,11],otherwis:[0,4,6],otim:2,our:[1,2,4,8],out:[1,2,3,4,5,7],outer:[0,2,3],output:[0,2,4,11],over:[0,1,2,3,4,5,6,11],overdetermin:1,overhead:[0,3],overwrit:1,own:[3,8,9],p_1:1,p_1a_1:1,p_2:3,p_2a_2:1,p_2l_1p_2:3,p_2p_1:3,p_3l_1p_3:3,p_3l_2p_3:3,p_3p_2p_1:3,p_i:3,p_j:1,p_ja_j:1,p_k:3,p_ka_k:3,p_n:5,p_na_n:1,packag:[0,8,9],page:[8,11],pai:3,pair:4,panic:11,paq:3,parallel:[1,2,5],paramet:[4,6],parameteris:7,part:[0,2,3,4,5,6,7,9,10],partial:[3,6,10],particular:[2,3,8],particularli:[1,2,3,8],pass:[1,2,3,4,5,6,8],password:11,past:[4,5,11],path:8,patholog:3,pav:5,pcolor:4,pdb:8,pde:5,pdf:[9,10],pep8:8,per:[2,4,5],perform:[1,3],perm:[3,6],permut:[3,6],perp:[0,1],person:11,perturb:[2,3,4],perturbatino:2,phd:10,physic:[2,4,5],pick:[4,8],piec:11,pilot:2,pivot:[6,9],place:[1,3,6,8],plai:4,plane:[4,5],planet:10,pleas:10,plot:4,plu:[1,2],pmatrix:[0,1,3,4,5],point:[1,3,4,6,8,9,11],poli:4,pollut:1,polynomi:[1,2,4,5],posit:[1,2,3,5,6],possibl:[0,2,3,4,5],post:11,potenti:[0,3],pow_it:[4,6],power:[1,5,6,9],practic:[1,9],prealloc:3,precis:[1,2,3,4,11],precondit:9,preliminari:[4,9],present:[0,1,2,3,5,6],preserv:[0,1,3],previou:[1,2,3,4,5],previous:[0,3,7],print:2,privat:[8,11],problem:[2,3,4,5,8,9],proce:2,procedur:[1,2,3,4,5],proceed:5,process:[1,3,4,11],processor:2,prod_:4,produc:[0,1,2,3,6],product:[1,2,3,4,6,9],prof:[9,10],professor:10,program:[0,8],programm:8,project:[1,4,5,6,8,9,11],projector:[2,6,9],proof:[2,3],properti:[2,3,4,5,6],proport:1,propos:[2,3],prove:[3,4],provid:[0,2,3,4,5,6,8,9,10,11],pseudo:[1,2,3,4,5],pseudocod:[2,5],pull:9,pure:9,pure_qr:[4,6],purpos:0,push:[0,8],put:[2,3,4,11],pyplot:4,pytest:8,python:[0,1,2,8,9,10],q1aq1:[4,6],q_1:[0,1,2,4,5,6],q_1q_1:0,q_1q_2:[1,4],q_2:[0,1,2,4],q_2q_1:1,q_2r_2:2,q_3:1,q_i:[0,1,2,4],q_iq:0,q_j:[0,1,4,5],q_jq_j:1,q_k:[1,3,4],q_kv_k:1,q_m:4,q_n:[0,1,4,5,6],qe_1:1,qe_2:1,qe_n:1,qhq:[4,5,6],qtq:4,quad:[0,2,3,4],quadrat:[2,4],quantifi:0,question:[2,8],quickli:[0,3,4,5],quit:[1,8],quot:[0,3,4],quotient:[6,9],r_1:[1,2,3],r_1r_2:1,r_1x:3,r_2:[1,2],r_i:1,r_j:1,r_k:[1,4,5],r_n:[1,5],rais:9,random:[2,6],randomli:4,randomq:6,randomr:6,rang:[1,2,9],rank1pert_inv:[0,6],rank2:[0,6],rank:[1,9],rapidli:4,rate:4,rather:[2,3,4,11],rattl:0,rayleigh:[6,9],read:[0,4,11],readabl:[0,8],reader:8,real:[0,1,2,4,5,6],realiti:2,realli:[0,1,2],rearrang:3,reason:[2,4],rebuild:5,recal:[3,4],recast:5,reciev:11,recomput:4,record:[0,1,2,3,4,5,11],recycl:5,reduc:[1,3,4,6],reduct:[4,6],refer:[0,9],reflect:[1,2,4],reflector:1,reformul:[2,3],region:5,registr:10,rel:[2,4],relat:4,relev:1,reli:7,remain:[2,4,8],rememb:[1,5],remov:[0,1],reorder:3,reorganis:1,repeat:[0,1,2,3,4],repeatedli:[3,4],replac:[0,1,3,5,6,7,8],report:10,repositori:[0,7,9,11],repres:[0,2,5,6],represent:[2,6],request:[5,9,11],requir:[1,2,3,4,5,6,11],rescal:1,research:10,residu:[1,5,6],resort:5,respect:[2,3,4],rest:[0,1,2,3,4],restrict:11,result:[0,1,2,3,4,5,6,8],return_residu:6,return_residual_norm:6,reveal:4,revers:1,review:11,revis:[0,11],revolv:11,rewrit:[3,5],rho:3,right:[0,1,2,3,4,6,8],rigor:8,rnorm:6,role:4,root:[2,4],rotat:[2,4,5],round:[1,2,3,4],routin:[0,1,11],row:[0,1,3,4,5,6],rq_it:[4,6],rule:2,run:[0,2,4,8,11],rz_k:2,s_1:0,s_2:0,saad:5,sai:[0,1,2,3],said:3,same:[0,1,2,3,4,5,6,7,11],sampl:4,satisfi:[0,1,2,3],save:[0,3,5,11],saw:[2,5],scalar:[2,6],scale:[0,1,2,4,10],scatter:5,scheme:[2,6],schmidt:[4,5,6,9],school:[2,3],schur:9,schwartz:2,scienc:5,scientif:[2,5,8],scientist:2,scratch:5,script:[0,1,2,3,4,5,8],search:[4,8],second:[0,1,2,3,4,10],secondari:3,section:[0,1,2,3,4,5,8],secur:11,see:[0,1,2,3,4,5],seek:[1,2,5],seem:3,seen:[0,2,5],select:4,sens:[1,2],sensit:2,separ:0,sequenc:[1,3,4,5,6],sequenti:4,seri:4,seriou:2,servic:11,set:[1,2,3,4,5,6,9,11],setup:11,sever:8,shall:[0,1,2,3,4,5],share:9,shell:11,shift:[4,6],shortli:3,should:[0,1,2,3,4,5,6,7,8,10,11],shouldn:[4,7],show:[0,1,2,3,4,5],shown:[0,2,4],side:[1,3,6],sign:[1,2,4,11],signific:5,sim:[2,3,4],similar:[2,3,5,6,9,10],similarli:[0,1,3,4,11],simpl:[0,4,10,11],simpler:4,simpli:[0,2,3,4,5],simplifi:[2,5],simular:4,simultan:9,sin:5,sinc:[0,1,2,3,4,5],singl:[0,2,3,6],singular:[2,4],situat:[2,3,4],sixth:0,size:[0,2,3,4,6],skeleton:[9,11],sketch:4,skill:8,skip:[4,11],slice:[0,1,3],slight:4,slightli:5,slow:5,slower:[0,2],small:[1,2,3,4,5,8,11],smaller:7,smallest:[2,4,11],softwar:[8,11],solut:[1,2,3,4,5,6,9],solv:[0,1,3,4,5,6,9,11],solve_l:[3,6],solve_lup:[3,6],solve_r:[2,6],solve_triangular:1,solve_u:[3,6],solveabl:1,solveq:[0,6],solver:[1,5],some:[0,1,2,3,4,5,6,10,11],someth:5,sometim:0,somewhat:8,somewher:0,sourc:[6,8],space:[0,1,2,4,5],span:[0,1,4,5,6],spars:5,special:[0,4],specialis:[0,1,5],specif:[2,3,5],specifi:[5,7],speed:[0,2,3,4],spoil:[1,2,4],sqrt:[0,2,3],squar:[0,2,3,4,5,6,9],ssh:11,stabil:[1,4,6,9],stabl:[2,3,4],stage:[3,4],standard:[0,1,2,3,8],start:[1,3,4,6,8,9],state:[0,11],statement:1,stationari:4,step:[1,2,3,4,5],still:[3,5],stop:[4,8],storag:[1,3],store:[0,1,3,5,7],store_iter:6,stori:3,straightforward:0,strategi:[3,4],stretch:2,strictli:[6,11],strong:5,structur:[1,2,4,5,7,9],student:10,studi:[1,5],studio:11,style:9,subarrai:1,subdivid:2,submatric:1,submatrix:[1,3],submiss:10,submit:11,submodul:9,subroutin:5,subset:[1,2,4],subspac:[0,1,4,6,9],substitut:[1,2,3,6,8],substract:2,subtract:[2,3],success:[1,4],suffici:[1,2,4],suggest:[2,10],suitabl:[5,8,11],sum:[0,2,4],sum_:[0,1,2,3,4],summari:[1,3],summaris:2,sup:2,sup_:[2,5],superpos:4,suppli:2,suppos:[0,2],sure:[0,8,11],surpris:4,swap:[3,4],symbol:[2,3],symmetr:[0,4,5],symmetri:3,system:[1,3,4,5,6,8,9,11],take:[0,1,2,4,5,8,9,10],taken:0,talli:2,taq_:4,task:8,tav:4,tax:4,taylor:4,techniqu:[3,5],tell:4,term:[0,2,4,8],termin:[1,4,6,11],terminolog:4,test:[0,1,2,3,4,5,7,9],test_exercises10:5,test_exercises1:0,test_exercises2:[0,1,7],test_exercises3:1,test_exercises4:2,test_exercises5:2,test_exercises6:3,test_exercises7:3,test_exercises8:4,test_exercises9:4,test_gs_class:1,test_gs_modified_r:7,test_script:8,text:[7,9,11],textbook:[2,3,4],than:[0,1,2,3,4,8,11],thei:[0,1,2,3,4,5,8,10,11],them:[0,1,2,4,5,11],theme:[0,1,3],theorem:[0,1,2,4],theori:[4,10],therefor:[3,11],theta:5,thi:[0,1,2,3,4,5,6,7,8,9,10,11],thin:1,thing:[0,2,3,7,11],think:[0,2,4],third:[1,2,4,10],those:[1,2,3,6,8,10,11],though:[3,4],three:[1,2,5],through:[0,2,3,5,11],thu:[0,3,4,5],tild:[2,3,4,5],time:[0,1,2,3,4,5,6,8,11],time_matvec:[0,6],timeable_basic_matvec:6,timeable_column_matvec:6,timeable_numpy_matvec:6,timeit:6,tip:11,titl:8,todai:5,togeth:[1,2,3,4],tol:[5,6],toler:[1,4,5,6],too:[3,4],tool:[0,1,2,3,4,8,9,10],top:[3,5,8],topic:5,total:[2,3,4,5],trace:3,track:[3,11],transfer:2,transform:[1,2,3,5,6,9],translat:[2,3,4],transpos:0,treat:2,trefethen:[2,9],triangl:[0,1],triangul:9,triangular:[2,3,4,5,6,7,9],tridiagon:[1,4],trivial:5,truncat:[1,2,4],turn:[1,2,3,4,5],tutori:[8,10,11],tv_0:4,twice:1,two:[0,1,2,3,4,5,10],type:[2,3,8,11],typic:[1,5],u_1:[0,3,6],u_1q_1:6,u_1v_1:0,u_2:[0,3,6],u_2q_2:6,u_2v_2:0,u_n:6,u_nq_n:6,unaccept:1,unari:2,unbound:2,unchang:4,uncomplet:4,uncorrel:2,under:[2,3,4,11],underbrac:[0,1,2,3,4,5],undergradu:[0,10],underpin:4,understand:[0,1,2,3,8],undisturb:1,unecessari:4,unfinish:8,unfortun:4,unimpl:[0,1,2,3,4,5],uniqu:[0,3],unitari:[1,2,3,4,5,6,9],unknown:1,unlik:4,unlimit:11,unnecessari:1,unrealist:2,unstabl:[1,2,3,4,7],until:[3,5,6],updat:[3,4,5,7,8,11],upon:1,upper:[0,1,2,3,5,6,7,9],upstream:8,url:[8,11],use:[0,1,2,3,4,5,6,7,8,10,11],useabl:1,used:[0,1,2,3,4,6,8],useful:[0,1,2,3,4,5,9],useless:11,user:11,uses:[0,1,2,5,10],using:[0,1,3,4,5,6,8,9,11],usual:[0,1,2],uv_1:0,uv_2:0,uv_n:0,ux_i:6,v_0:4,v_1:[0,1,4],v_2:[0,1,3,4],v_3:[1,4],v_i:1,v_j:[1,2],v_k:[1,2,4],v_m:4,v_n:[1,3,4],valu:[0,1,2,3,4,5,7],valuabl:8,van:[3,9],vanish:4,varepsilon:[2,3,4],variabl:4,varianc:4,variou:[0,2,7],vdot:[0,1,2,3,4,5],vector:[1,2,3,4,5,6,9],venv:9,veri:[0,2,3,4,5,9,10,11],verifi:[2,3,4,6],version:[2,7,9,11],via:[1,2,5,6,10,11],video:[0,1,2,3,4,5,9],view:[0,1,2,3],virtual:0,visual:11,visualis:4,vivid:2,vp_n:5,wai:[0,1,2,3,4,5,8,11],want:[1,2,4,5,8,11],wast:[1,2,5],web:[8,9],webpag:[9,11],websit:8,weight:0,well:[0,2,3,4,5,8],were:[3,4,5,7],what:[0,2,3,4,5,9,11],when:[0,1,2,3,4,5,11],whenev:[0,2],where:[0,1,2,3,4,5,6,7],which:[0,1,2,3,4,5,6,7,8,11],whilst:[0,1,2,3],who:10,whole:[3,4],whose:[0,4,5,6],why:[0,2,3,4],wide:[1,5,11],wilkinson:[2,4],window:[8,9],wisdom:4,wish:10,within:2,without:[1,3,4,5],won:[1,2,4],word:[0,4],work:[0,1,3,4,9,10,11],worth:10,would:[2,3,4,5,8],wrap:0,write:[0,1,2,3,4,5,8,11],writeabl:1,written:[0,1,2,3,4,8,11],x_1:[0,1,2,3,4,6],x_2:[0,1,2,6],x_i:[0,2,3,6],x_j:0,x_k:[1,2,3,6],x_m:2,x_n:[0,5],y_1:2,y_2:2,y_i:2,y_m:2,year:[5,10],yield:2,you:[0,1,2,3,4,5,6,8,10,11],your:[0,1,3,4,5,6,9],yourself:[0,11],z_k:2,zero:[0,1,2,3,4,5,6]},titles:["<span class=\"section-number\">1. </span>Preliminaries","<span class=\"section-number\">2. </span>QR Factorisation","<span class=\"section-number\">3. </span>Analysing algorithms","<span class=\"section-number\">4. </span>LU decomposition","<span class=\"section-number\">5. </span>Finding eigenvalues of matrices","<span class=\"section-number\">6. </span>Iterative Krylov methods for <span class=\"math notranslate nohighlight\">\\(Ax=b\\)</span>","cla_utils package","Errata","Computational exercises","Computational Linear Algebra","Practical matters","Computational tools"],titleterms:{"float":2,The:[4,11],Using:11,access:11,accredit:10,activ:8,adjoint:0,advantag:3,algebra:2,algorithm:[1,2,3,4],analys:2,applic:1,arithmet:2,arnoldi:5,assess:10,assum:10,backward:2,blackboard:10,branch:8,choleski:3,cla_util:6,classic:1,clone:8,code:[8,11],command:11,comment:8,compon:0,comput:[2,8,11],condit:2,construct:0,content:6,converg:5,copi:8,count:2,decomposit:3,discuss:2,document:8,edit:11,eigenvalu:4,equival:4,errata:7,exercis:8,exercises10:6,exercises1:6,exercises2:6,exercises3:6,exercises4:6,exercises5:6,exercises6:6,exercises7:6,exercises8:6,exercises9:6,factoris:[1,3,4],feedback:8,find:4,form:4,from:0,get:11,gist:11,git:11,github:11,gmre:5,gram:[1,2],gstool:6,hell:11,hermitian:0,hessenberg:4,household:[1,2],how:[4,8],inequ:2,inner:0,interpret:1,invers:[0,4],invert:0,issu:11,iter:[4,5],knowledg:10,krylov:5,lab:11,least:1,lectur:[9,10],line:11,linear:2,local:8,machin:11,masteri:10,matric:[0,4],matrix:[0,2,3],matter:10,method:5,modifi:[1,2],modul:6,multipl:0,norm:[0,2],note:9,nullspac:0,number:2,obtain:8,oper:2,orthogon:0,orthogonalis:1,orthonorm:0,own:11,packag:6,pivot:3,point:2,power:4,practic:[4,10],precondit:5,preliminari:0,problem:[1,11],product:0,project:0,projector:[0,1],pull:8,pure:4,python:11,quotient:4,rais:11,rang:0,rank:0,rayleigh:4,repositori:8,request:8,schmidt:[1,2],schur:4,set:[0,8],share:11,similar:4,simultan:4,skeleton:8,solut:8,solv:2,squar:1,stabil:[2,3],start:11,structur:3,style:8,submodul:6,subspac:5,system:2,take:3,test:8,tool:11,transform:4,triangul:1,triangular:1,unitari:0,upper:4,using:2,vector:0,venv:8,what:1,window:11,work:8,your:[8,11]}})