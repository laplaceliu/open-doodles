import Props from './Props';
import React from 'react';
import { uniqueId } from 'lodash';

export default class GroovySittingDoodle extends React.Component<Props> {
    private group1 = uniqueId('react-group-');
    private group2 = uniqueId('react-group-');
    private path1 = uniqueId('react-path-');
    private path2 = uniqueId('react-path-');

    render() {
        const { group1, group2, path1, path2 } = this;
        const { inkColor, accentColor } = this.props;
        return (
            <g id={group1} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id={group2}>
                    <path
                        d="M521.9193,324.8337 C559.2843,321.8617 594.9323,335.7857 624.7963,357.4877 C663.2863,385.4587 695.9093,425.4607 717.9913,467.6117 C720.3403,469.4207 722.6543,471.2757 724.9523,473.1477 C737.2423,483.1597 749.2493,493.7347 759.8923,505.5047 C765.8343,512.0747 781.4193,528.0507 774.6533,538.1277 C773.2173,540.2677 770.8593,541.4957 768.4973,542.3427 C761.8753,544.7137 754.9723,545.9147 748.4413,548.6887 C740.3793,552.1117 732.0193,556.9057 726.8543,564.2147 C725.3853,566.2937 725.0023,568.7467 723.0273,569.6627 C720.9333,570.6347 716.9853,570.2557 714.6963,570.4797 C710.0953,570.9317 705.4933,571.3827 700.8913,571.8327 C690.0803,572.8927 678.7793,573.0097 668.2033,575.6207 L619.5503,587.6337 C609.5993,590.0907 598.1623,591.4447 588.7253,595.4827 C574.6433,601.5097 561.2083,610.3337 547.7333,617.6057 C541.2183,621.1217 534.7023,624.6387 528.1863,628.1547 C525.0043,629.8727 522.8263,629.8957 519.0973,630.1827 L492.1873,632.2527 C487.8463,632.5867 485.7623,634.3347 485.1933,629.9907 L478.9383,582.2327 L475.6323,556.9787 C475.4353,555.4767 475.4933,548.0367 474.2623,547.1387 C473.4903,546.5757 468.9603,547.7877 468.1223,547.8907 L455.9083,549.3867 C447.1113,550.4637 438.3153,551.5407 429.5183,552.6177 C428.8043,552.7047 424.8493,552.6597 424.4053,553.2437 C423.8853,553.9287 424.8743,557.8547 424.9633,558.6997 C425.8963,567.5677 426.8303,576.4357 427.7633,585.3037 C427.8723,586.3317 429.1213,591.1007 428.4633,591.9447 C428.0053,592.5307 424.6913,592.6017 424.0183,592.7117 C415.5323,594.0967 407.0473,595.4817 398.5613,596.8677 C392.4843,597.8597 384.5423,597.8097 378.7973,600.0947 C375.4983,601.4067 372.2343,604.7617 369.3843,606.8587 L327.9983,637.3127 C321.7213,641.9307 313.2613,640.7547 305.6173,641.3367 L217.4403,648.0547 C217.5133,645.3087 217.5873,642.5627 217.6603,639.8157 C218.0483,625.2707 218.4353,610.7257 218.8233,596.1807 L219.3313,577.1567 C219.3633,575.9527 218.8823,572.4297 219.6693,571.5397 C220.7153,570.3587 225.3903,569.8467 226.8413,569.4167 C231.7083,567.9757 236.5743,566.5357 241.4403,565.0957 C255.7173,560.8697 269.9923,556.6437 284.2683,552.4187 C298.3783,548.2427 312.4863,544.0657 326.5953,539.8897 C331.4233,538.4607 336.2503,537.0317 341.0773,535.6027 C342.1923,535.2727 346.0873,534.8337 346.8623,533.8907 C347.8393,532.7027 347.4023,527.6337 347.5583,526.1277 C348.3243,518.7787 349.4163,511.4627 350.7463,504.1957 C360.3383,451.7777 382.7573,398.5337 424.3263,363.5647 C451.8043,340.4487 486.2723,327.6687 521.9193,324.8337 Z M528.5093,429.9497 C524.8103,425.6067 518.5963,418.5217 512.0613,419.6977 C506.7503,420.6537 503.8563,427.2377 502.0053,431.6147 C494.5643,449.2067 492.2563,469.3717 489.9423,488.1727 C488.4903,499.9697 487.3223,511.8187 486.5753,523.6817 C513.0813,521.6427 539.5873,519.6037 566.0933,517.5647 C564.8423,509.1187 563.8393,500.5947 562.3333,492.1897 C561.5783,487.9767 559.4903,484.1837 557.7053,480.2917 C549.7213,462.8837 541.0063,444.6227 528.5093,429.9497 Z"
                        id={path1}
                        fill={accentColor}
                    />
                    <path
                        d="M896.454349,87.0009676 L897.1024,87.0122 C914.6924,87.4802 930.2044,98.7992 942.2354,110.7782 C948.1844,116.7012 953.6094,123.6682 956.1624,131.7752 C959.1104,141.1402 958.1404,151.4412 955.8974,160.8402 C950.9424,181.6112 944.8864,202.4892 938.0764,222.7322 C934.7254,232.6902 929.8664,242.4542 927.3374,252.6462 C925.2524,261.0432 934.0324,267.1592 934.3684,275.7882 C934.7074,284.4932 928.8504,292.6712 920.8024,295.7822 C917.3744,297.1072 913.2274,296.0002 910.0674,297.3582 C907.1774,298.5992 906.1654,302.2622 905.6104,305.0742 C904.8544,308.9092 904.9904,312.7412 905.2054,316.6102 C905.3374,318.9772 904.7474,322.8402 905.9024,324.9512 C906.6954,326.4012 908.1404,326.8752 909.3854,327.8672 C911.0844,329.2212 912.2164,330.9062 913.7064,332.4622 C916.1624,335.0302 918.5254,336.4212 919.1924,340.1672 C919.5474,339.3162 919.9024,338.4652 920.2564,337.6152 C922.0874,340.9642 923.4444,342.5702 921.7034,345.7492 C927.1044,345.2192 930.3044,355.0172 931.7204,358.7332 C934.3134,365.5332 936.0944,372.5992 938.6934,379.4032 C942.2554,388.7322 946.9354,397.9382 949.2084,407.6992 C951.1174,415.9032 952.6284,424.3292 954.3254,432.5902 C955.2814,437.2412 956.1144,441.9662 957.8634,446.4012 C958.5434,448.1232 959.8054,449.2822 960.5874,450.8172 C961.6564,452.9182 961.2384,454.0282 961.2894,456.3292 C961.3794,460.4312 963.9674,463.0942 964.7814,467.0792 C965.6504,471.3362 966.3604,475.6412 967.2374,479.9072 C969.0044,488.5002 972.2774,497.0812 973.0654,505.7852 C973.9804,515.8922 975.9434,525.8752 976.9304,535.9852 C977.7944,544.8192 976.3264,554.3032 978.1714,562.8492 C979.8074,570.4342 977.7794,577.3702 977.0574,584.9012 C976.8744,586.8132 979.8194,598.1972 975.0864,596.0112 C975.9754,598.6952 977.2214,599.9742 977.2884,602.9182 C977.3504,605.6722 976.6404,608.5032 976.0604,611.1732 C974.9404,616.3332 974.1944,621.9572 972.0004,626.7912 C969.5194,632.2592 965.7384,632.9142 960.5984,634.7902 C957.1184,636.0602 950.8524,640.5922 948.1104,635.7442 C946.4754,640.7212 943.2834,637.2812 939.7054,637.0032 C939.7294,637.0042 937.6574,637.7702 937.2694,637.8232 C936.0114,637.9922 934.5244,637.3992 933.2724,637.2952 C930.1514,637.0362 927.0894,637.4532 924.0364,638.0852 C917.0014,639.5432 910.1954,641.5592 903.0564,642.5752 C889.1114,644.5592 875.4454,643.6212 861.4804,644.4902 C834.1504,646.1892 806.3684,644.7632 779.0174,644.0272 C776.0814,643.9482 772.9174,644.3592 770.0204,643.9082 C766.8974,643.4212 766.2164,641.9432 763.7834,640.4632 C759.7384,638.0052 755.2504,640.3962 751.0544,641.2942 C738.7344,643.9312 725.8684,644.1262 713.4504,646.6772 C688.2204,651.8582 664.9744,662.0832 640.8074,670.7082 C630.3304,674.4472 618.0334,680.5022 606.7354,680.765267 C593.0434,681.0612 596.2774,667.5752 598.7934,658.9062 C590.8824,661.0062 578.4594,670.6022 570.4184,665.0332 C560.8354,658.3972 573.0284,647.3652 573.6024,639.5652 C556.4754,643.1202 537.0474,650.9172 519.6634,644.5792 C516.3184,643.3602 513.4074,640.7822 509.8164,640.3632 C506.0834,639.9272 502.1374,641.2462 498.3634,641.2232 C489.7654,641.1682 481.4164,640.0242 472.8214,641.0832 C453.6584,643.4432 434.7674,644.7352 415.4494,645.2442 C396.0014,645.7562 376.5524,646.9082 357.0954,646.8602 C347.2194,646.8352 337.1604,645.6642 327.3044,646.1892 C323.4344,646.3952 315.1054,649.2062 312.3864,645.2732 C309.6564,648.5462 307.3374,646.3592 303.8354,646.7222 C304.4844,646.6552 302.0114,648.0852 301.6394,648.2232 C299.7984,648.9072 298.0774,648.6992 296.1554,648.6792 C291.0354,648.6272 286.2524,651.0232 281.1584,650.7912 C279.8704,650.7332 278.8964,650.3582 277.8034,649.9162 C277.5444,649.8112 277.6064,648.6972 277.1914,648.6042 C274.6994,648.0462 275.3434,649.5722 273.7614,650.3422 C272.0074,651.1942 269.4124,649.8152 270.4104,652.4372 C265.6514,652.2282 261.1424,653.8322 256.8124,651.0102 C258.8594,655.5342 251.7084,651.7762 249.8394,651.7022 C246.7334,651.5772 244.0134,653.1302 240.9154,653.4882 C237.2004,653.9162 233.4674,652.1932 229.8324,653.2452 C226.9844,654.0682 226.0094,656.0492 223.0454,655.0362 C220.5274,654.1762 218.9544,652.3072 217.7324,650.2642 C216.0464,647.4452 215.8304,646.1872 211.7644,646.1372 C208.7494,646.1002 205.7184,646.7492 202.6744,646.7432 C199.1864,646.7362 195.3534,646.3662 192.1694,648.0242 C188.7394,649.8102 186.7244,652.5292 182.9204,653.9282 C165.8144,660.2182 147.0364,658.5532 129.1884,658.4462 C121.6584,658.4012 116.1324,659.0932 114.0184,650.5042 C112.2324,643.2472 111.5164,635.6582 109.8124,628.3412 C107.7244,619.3762 105.4294,611.0582 100.7964,603.0432 C96.3024,595.2702 92.5214,587.2402 88.6084,579.1662 C80.4704,562.3742 69.1424,548.0872 56.5124,534.4412 C51.7144,529.2562 46.2154,523.4802 45.9920521,516.0142 C45.8284,509.5672 48.6684,502.8882 52.3934,497.7522 C55.7194,493.1682 61.1994,487.9972 67.3984,489.0662 C71.1314,489.7102 73.5784,492.7212 76.3644,494.9802 C79.4094,497.4482 82.7264,499.1302 86.3964,500.4762 C94.9544,503.6152 102.1314,507.0502 109.5424,512.4682 C117.0414,517.9512 124.0514,524.0912 130.5364,530.7402 C142.9854,543.5052 155.7414,556.7662 162.8944,573.2952 C165.7134,579.8072 167.5144,586.0872 169.4364,592.8392 C171.3244,599.4692 176.4644,597.6422 182.2444,596.6892 C189.2884,595.5272 196.3674,594.9042 203.4584,594.1682 C206.1274,593.8912 209.8904,593.8092 211.4974,591.2872 C213.2694,588.5062 211.2394,584.9032 211.0784,582.0182 C210.9924,580.4772 211.5034,579.3412 211.6314,577.8382 C211.7784,576.1292 211.2734,574.5682 211.2714,572.8662 C211.2694,569.2062 212.9824,565.9462 215.8294,563.7292 C221.1564,559.5792 228.9264,557.1052 235.2334,554.8222 C243.8444,551.7042 253.0714,550.1722 261.9394,547.9472 C271.9244,545.4412 281.9694,543.1832 292.0084,540.9072 C301.8724,538.6712 311.7214,536.3712 321.6914,534.6492 C327.5394,533.6392 333.8834,534.0082 339.5524,532.1622 C345.5774,530.2002 344.5784,524.1382 344.5604,518.7672 C344.5314,509.8972 345.6294,500.7652 346.9284,491.9962 C349.6924,473.3542 356.2764,455.1102 362.2614,437.2952 C368.0274,420.1372 375.1704,403.6692 386.9624,389.7452 C398.4414,376.1902 412.5304,363.9232 427.1454,353.8502 C442.3734,343.3542 459.3184,335.7712 475.2144,326.4012 C471.7404,323.7442 467.5964,321.4772 465.6004,317.3852 C463.3464,312.7662 464.3014,307.2432 464.3974,302.3062 C464.5054,296.7342 464.6754,291.8432 466.6654,286.5352 C467.7544,283.6282 471.9644,278.1142 471.3194,274.9532 C470.2384,269.6452 458.6264,265.7682 454.3504,263.5842 C447.6444,260.1582 440.9254,256.6782 434.7454,252.3532 C428.8144,248.2042 423.2344,243.2102 419.6414,236.8412 C418.6224,235.0342 417.7834,233.1362 417.1324,231.1662 C416.4074,228.9682 416.9144,228.2192 414.7174,228.0582 C411.2104,227.8002 405.9524,231.3202 402.9974,232.8752 C387.7624,240.8922 371.0304,251.6812 353.0544,250.9652 C346.5324,250.7062 339.2004,248.6572 336.8944,241.8552 C333.8584,232.9002 340.1974,223.6492 345.7594,217.1812 C334.9104,218.8862 314.9044,224.2152 306.3434,214.5352 C300.6384,208.0852 304.9414,197.8472 309.7254,192.2542 C316.0464,184.8662 325.0574,180.3682 333.3814,175.6672 C323.1674,171.7732 311.8604,169.2832 302.8784,162.7672 C294.2874,156.5362 295.3494,146.9632 302.1344,139.6132 C309.3884,131.7562 322.0724,127.7322 332.0484,124.8152 C344.2844,121.2372 356.4404,121.5242 369.0494,121.7642 C391.6794,122.1942 411.1184,130.5362 429.6794,143.1482 C439.4934,149.8172 449.1664,157.0142 457.8704,165.0912 C466.0344,172.6662 474.7434,179.7102 482.7874,187.3672 C490.5814,194.7862 496.7124,203.9782 504.9384,210.9092 C511.9334,216.8022 519.6024,225.1552 528.4884,227.7712 C537.9114,230.5452 546.3934,235.1332 555.8964,237.8642 C566.6764,240.9612 575.9364,246.1402 585.9264,251.0812 C627.8514,271.8172 672.8584,285.3122 717.0584,300.1992 C739.6664,307.8132 762.4244,313.1802 785.5054,318.9952 C797.0964,321.9152 807.8594,323.4732 819.8204,322.9452 C822.5784,322.8242 825.2124,322.7522 827.9324,323.1352 C829.9264,323.4152 831.4424,324.1692 833.2254,322.9772 C835.7874,321.2652 836.7504,316.8092 838.2774,314.2722 C829.7654,311.6332 821.4324,308.7782 817.5484,300.0552 C815.1014,294.5582 813.8314,288.1472 812.7584,282.2492 C812.1824,279.0752 812.1694,275.8722 811.6774,272.6962 C811.4074,270.9422 810.5734,269.1092 810.6374,267.3172 C810.4464,268.3142 804.1034,265.0352 803.1834,264.4262 C799.6344,262.0752 798.9884,257.3362 799.0174,253.3362 C799.0514,248.8182 800.4154,243.8522 803.4834,240.4262 C804.9354,238.8042 806.6634,237.5882 808.7744,236.9772 C810.2724,236.5432 812.2484,237.1112 813.5694,236.6742 C819.4294,234.7372 820.0854,220.2362 820.9164,214.9572 C822.7484,203.3252 824.5734,192.2202 828.5274,181.0702 C835.7364,160.7422 845.0144,140.9862 856.0654,122.4782 C865.53416,106.61886 874.994276,87.2271688 895.813466,87.0009676 L896.454349,87.0009676 Z M716.4774,575.3212 C708.0504,576.7802 699.9774,579.7602 691.8374,582.2872 C684.2354,584.6472 676.5304,586.1502 668.7314,587.6842 C653.2104,590.7382 637.3484,593.5332 622.0524,597.5142 C617.7454,598.6352 615.4794,601.1652 611.7214,602.9242 C608.9354,604.2282 606.3204,602.9072 603.4224,602.7962 C597.1134,602.5552 590.1134,604.6132 584.0454,606.1472 C569.7204,609.7662 557.0104,616.0522 544.0474,623.0012 C542.8874,623.6222 535.0444,627.2112 535.4164,628.6972 C535.7184,629.9102 545.6884,626.6532 547.2744,626.4122 C555.3024,625.1892 563.1444,622.6582 571.1134,621.0862 C577.6544,619.7952 584.2694,618.9212 590.7824,617.4882 C598.0304,615.8942 613.4704,610.3502 614.0844,622.3212 C614.7474,635.2592 600.4604,639.2382 591.8724,645.2732 C592.8294,646.9242 606.6074,641.4802 608.3154,640.9302 C614.1744,639.0412 619.6094,635.6362 625.5744,634.1862 C635.9524,631.6632 634.6954,643.1252 628.9664,648.2242 C622.6004,653.8882 612.0724,655.6002 608.5474,664.3172 C613.1764,665.9872 619.2284,662.8512 623.4804,661.2922 C629.0644,659.2452 634.6694,657.2292 640.2874,655.2772 C652.8984,650.8952 664.8764,644.8582 677.5544,640.6832 C703.5664,632.1192 731.0614,629.6632 758.2534,628.1412 C755.8304,618.7422 753.1804,609.3982 751.0034,599.9372 C750.0714,595.8882 749.2184,591.8202 748.5124,587.7252 C748.0214,584.8772 748.4394,578.0622 746.4774,575.8162 C744.0884,573.0802 737.8664,576.9232 734.4804,576.8502 C731.1634,576.7782 728.7434,575.0662 725.6784,574.5262 C722.7684,574.0142 719.3244,574.8282 716.4774,575.3212 Z M227.7224,629.7272 C227.7224,634.2202 226.9434,639.6702 232.8534,640.1952 C237.6334,640.6202 246.9844,641.1662 250.7974,637.7672 C247.1434,635.9862 242.9904,635.6752 239.1094,634.6482 C235.0654,633.5772 231.3314,631.8192 227.7224,629.7272 Z M325.2684,547.8612 C323.4704,547.8742 320.4374,549.8732 318.7974,550.4312 C315.7964,551.4512 312.7464,552.3122 309.6824,553.1232 C300.4764,555.5612 288.6234,555.9412 284.3964,565.8232 C282.2864,570.7552 280.8234,583.4382 273.4914,583.3922 C266.9744,583.3502 263.0714,573.9442 258.4224,570.5972 C253.6174,567.1392 245.9994,569.4932 240.8174,570.9952 C235.5514,572.5202 227.3794,574.4772 227.9704,581.1512 C228.3954,585.9492 229.2614,590.3162 229.2204,595.2172 C229.1694,601.4562 228.6424,607.6822 228.6424,613.9212 C232.3394,608.8562 235.5644,598.6732 242.1144,596.6362 C248.7314,594.5782 252.4744,606.1392 254.1954,610.5702 C256.3284,616.0602 259.0094,622.2862 259.1724,628.2362 C259.2234,630.1042 258.0894,635.2362 259.3884,636.7722 C260.5414,638.1362 264.9764,637.1472 266.4094,636.9982 C275.2784,636.0752 284.1004,634.9262 292.9974,634.1562 C297.5664,633.7612 298.8104,632.7582 298.3634,627.8432 C298.0124,623.9832 297.9034,620.3042 298.3874,616.4292 C300.5474,599.1282 311.2014,583.3022 329.2154,580.2982 C340.0704,578.4872 352.7474,579.8112 363.5844,581.5502 C367.7614,582.2202 372.2964,584.2432 376.5404,584.0672 C379.6754,583.9372 378.6654,583.7592 379.3074,580.8082 C379.7564,578.7452 380.7174,576.9852 382.2864,575.5552 C383.5264,574.4252 385.1004,575.0632 386.2694,573.5862 C387.1154,572.5172 386.9884,571.0612 387.3874,569.8292 C388.1664,567.4322 389.5744,564.1972 392.3774,563.5922 C396.8884,562.6172 401.6834,568.6572 403.9604,571.7722 C406.3124,574.9932 407.0234,584.6092 410.8064,585.8682 C415.1714,587.3192 420.3644,581.5982 421.2744,577.9942 C422.4984,573.1462 420.9564,567.9012 420.2194,563.1002 C420.1674,562.7562 419.9524,559.5662 419.7154,559.3582 C419.0784,558.7972 414.2794,558.9542 413.4294,558.9122 C409.2484,558.7132 405.0604,558.7032 400.8754,558.6922 C384.4684,558.6512 368.3964,557.0382 352.0984,555.3182 C354.4654,559.1772 358.5184,565.5132 354.3584,569.5872 C351.2754,572.6052 345.7114,571.0912 341.8394,571.7132 C336.3694,572.5912 327.1484,577.7822 321.9354,573.9872 C314.5894,568.6372 322.8994,559.4452 325.6274,554.3892 C326.2114,553.3052 328.3774,549.4912 327.4594,548.2202 C326.6644,547.1192 326.4324,547.8522 325.2684,547.8612 Z M202.9224,607.3202 C199.1714,608.4642 195.3924,609.5642 191.5604,610.4122 C187.0654,611.4072 180.0954,610.4412 177.9084,615.3862 C176.2444,619.1462 177.0704,625.2122 178.4224,628.9572 C179.9704,633.2462 183.6034,634.3492 187.8914,634.6762 C192.8954,635.0582 197.9654,634.2512 202.9104,633.5672 C204.8594,633.2972 206.9374,632.8102 208.9174,632.8072 C210.0924,632.8042 212.4644,633.8792 213.5094,633.0002 C214.8624,631.8612 213.9714,625.3912 213.8654,623.8402 C213.6024,619.9992 212.8734,616.2092 212.6744,612.3622 C212.5324,609.5992 213.5744,605.8442 210.3354,605.2552 C208.3184,604.8882 204.6754,606.7862 202.9224,607.3202 Z M505.8234,531.2832 C503.0204,531.7682 500.2334,532.1152 497.3864,532.0722 C495.6324,532.0452 493.5324,531.4492 491.9114,532.4112 C488.9174,534.1882 489.3634,538.8692 489.4654,541.7902 C489.5904,545.3342 489.9004,548.9312 490.2784,552.4572 C490.6394,555.8292 492.4894,561.3822 489.8764,564.2712 C488.0334,562.2542 487.1244,555.6592 483.5674,555.9002 C479.6564,556.1642 481.4644,562.4142 481.8114,564.6522 C483.7284,577.0232 485.9134,589.4012 487.6264,601.8082 C488.4404,607.7062 489.4924,613.5612 490.0374,619.4882 C490.4024,623.4662 490.5254,627.0482 494.9714,627.8722 C499.0914,628.6362 503.7214,627.3322 507.8864,627.2322 C512.1744,627.1292 514.6304,626.8382 517.0974,622.9622 C511.1904,621.6692 501.8334,622.4602 498.5054,616.2122 C494.6254,608.9232 502.8094,602.3652 506.8364,597.3832 C509.9274,593.5572 516.2474,580.8372 521.9854,588.3922 C524.0514,591.1122 524.4244,595.2632 525.4674,598.4272 C527.1644,603.5682 529.2374,608.6352 531.2714,613.6492 C549.8804,604.0432 568.9754,595.3832 589.2704,589.9902 C584.0964,581.2452 577.6914,573.3702 573.8184,563.8912 C569.4784,553.2682 565.8834,542.3552 561.4464,531.7662 C554.4114,535.8722 546.8904,525.9182 539.8854,525.5172 C528.8194,524.8842 516.6724,529.4032 505.8234,531.2832 Z M395.5914,602.9002 C391.7334,605.1982 386.0584,609.6672 385.1324,614.2872 C383.5324,622.2742 392.6474,616.9342 395.4614,615.1862 C401.3524,611.5272 407.1244,610.3582 413.8894,612.6132 C422.5654,615.5042 430.5604,620.3852 439.8724,616.6772 C444.5054,614.8312 454.7824,610.8872 452.0094,603.8102 C450.0974,598.9322 444.5024,603.1162 441.5454,604.8652 C433.8034,609.4442 427.3924,606.5432 419.6564,603.2382 C411.9194,599.9322 403.2074,598.3642 395.5914,602.9002 Z M120.8364,561.9122 C117.7394,566.3022 124.0354,565.3542 126.7994,565.7822 C132.5794,566.6752 138.5324,571.2842 136.9394,577.8062 C135.3864,584.1652 129.3014,588.1402 128.1424,594.8152 C127.1464,600.5472 128.1064,607.8022 133.6414,610.9492 C136.7504,612.7162 143.5454,613.4442 146.6744,611.4142 C151.4524,608.3142 145.5184,603.6982 142.3574,602.1632 C138.1684,600.1282 134.7854,599.0262 136.8584,593.6802 C139.3854,587.1632 144.2934,582.1622 143.8574,574.7052 C143.4974,568.5272 140.2364,561.5062 134.2954,558.9392 C130.0414,557.1022 123.7374,557.7992 120.8364,561.9122 Z M543.7032,542.9732 C549.0572,542.7442 549.2702,549.2142 549.0002,552.3962 C548.6312,556.7472 549.4212,561.3842 549.5122,565.7492 C549.6332,571.5302 550.8432,590.4622 540.6202,587.6502 C534.0462,585.8422 528.6372,579.5422 523.3522,575.4942 C518.4902,571.7682 506.1302,567.2992 505.3292,560.2352 C504.4252,552.2562 514.1712,550.7632 519.7552,549.4952 C527.7272,547.6852 535.4672,543.3272 543.7032,542.9732 Z M517.6214,332.6832 C509.1314,333.5022 500.6884,334.7632 492.6084,337.5832 C487.1414,339.4912 478.7444,340.8592 474.8694,345.5412 C471.5194,349.5902 472.9714,355.3622 471.8824,360.1462 C470.4094,366.6182 465.9414,365.7332 461.6084,361.6922 C456.4224,356.8542 454.9224,353.3512 447.7034,357.8912 C432.7584,367.2892 420.9094,381.1642 409.0544,394.0182 C418.2214,396.7942 436.2044,397.4662 439.2494,408.9192 C440.9134,415.1812 435.8964,419.7362 431.3884,423.1532 C425.5674,427.5662 419.4914,431.6472 413.7974,436.2372 C408.4844,440.5202 396.5704,457.5732 393.2004,442.5802 C391.1134,433.2992 395.0234,423.7082 393.3644,414.5402 C386.1564,426.1622 378.8374,437.7562 372.2284,449.7342 C366.6034,459.9312 363.3324,470.8382 360.6344,482.1122 C364.8404,482.3872 369.2184,480.2522 373.3764,481.5132 C377.3804,482.7272 379.2544,486.5152 379.5354,490.4392 C380.0134,497.0922 376.9414,503.8642 375.3954,510.2532 C374.3344,514.6412 373.1164,524.6002 367.7714,526.0282 C361.6794,527.6552 357.8564,518.2842 355.1404,514.4762 C352.5544,518.4512 352.5974,524.2662 352.2194,528.8232 C351.9604,531.9562 350.2124,537.8132 353.7364,539.5452 C357.0344,541.1672 363.9884,539.1352 367.5154,538.9862 C374.0594,538.7082 380.7304,538.1782 387.2764,538.3712 C393.4614,538.5542 402.5614,541.8602 404.9774,534.2592 C406.6224,529.0842 408.0714,510.4862 416.8454,520.5762 C420.7434,525.0572 423.7914,530.1652 427.5564,534.7312 C431.3544,539.3362 434.8074,539.6382 440.4794,539.4052 C451.7074,538.9452 462.6714,541.1012 473.6574,542.8422 C483.2974,544.3692 482.0324,536.1872 481.8894,528.9032 C481.6704,517.6122 483.9094,505.8052 485.1304,494.5762 C488.0344,467.8752 493.9944,441.4952 503.1634,416.2422 C495.4934,413.6302 481.7434,424.1682 476.0724,416.1652 C471.4104,409.5862 477.3994,400.5232 479.8374,394.3732 C482.8784,386.7002 484.4164,378.6842 489.3764,371.8842 C490.9414,369.7372 493.1684,366.8602 496.1984,367.5832 C498.7984,368.2042 499.8344,371.5202 501.2974,373.3912 C505.9414,379.3292 511.8734,383.7822 516.0014,390.2592 C518.5264,394.2212 520.4904,398.4552 521.3104,403.1072 C521.5364,404.3862 521.2504,407.0052 522.1504,408.0782 C524.9414,411.4032 533.7344,411.3542 537.6424,413.3932 C550.9844,420.3562 555.6734,440.6242 560.8544,453.4042 C562.3144,457.0032 563.7614,460.6112 564.5374,464.4262 C565.0554,466.9762 565.0304,470.2182 566.4134,472.5052 C569.4324,477.4982 578.8124,473.0392 583.4154,472.2662 C591.1304,470.9702 598.8074,469.7342 606.5534,468.6462 C611.2794,467.9832 618.1584,466.2702 621.7594,470.4572 C625.4924,474.7982 623.3454,481.6352 621.4714,486.2922 C618.4124,493.8932 614.5044,501.1552 611.2764,508.6872 C608.7014,514.6952 607.4194,522.4352 602.4714,527.0642 C598.1854,531.0762 591.0924,532.2262 586.0464,528.9612 C583.1664,527.0982 575.7724,509.0762 573.8214,509.8812 C577.3434,523.8012 582.5074,537.9952 587.9634,551.2802 C589.6384,555.3612 592.5154,563.6822 596.7484,565.8952 C600.2574,567.7302 608.2194,564.2632 611.8094,563.5912 C615.2134,562.9532 621.9334,560.1892 625.1884,562.2142 C629.1334,564.6702 629.6144,571.2202 630.0574,575.2862 C630.3864,578.3012 629.7894,580.5512 633.4574,580.4012 C636.0414,580.2962 638.6494,579.0362 641.1294,578.4022 C646.8864,576.9332 652.8614,575.9612 658.7224,575.0152 C672.2774,572.8262 685.8274,570.6432 699.3764,568.3992 C711.0244,566.4702 722.5204,566.4812 733.0454,560.9562 C738.3804,558.1562 744.4964,557.3012 750.1774,555.4282 C755.8114,553.5712 761.4274,552.3662 767.3244,551.6682 C780.2134,550.1442 792.7554,548.6512 805.4934,546.0402 C812.4644,544.6112 819.4224,543.1142 826.3564,541.5132 C832.5284,540.0882 838.4954,537.8242 844.6374,536.4272 C849.7474,535.2652 853.9444,536.1382 856.1334,530.3382 C857.7034,526.1792 857.3384,521.5182 857.7414,517.1652 C859.5844,497.2762 852.6194,477.2742 851.1944,457.4942 C850.7324,451.0882 850.5904,444.6622 850.1094,438.2612 C849.8894,435.3282 850.0224,426.7882 846.6004,425.2072 C846.2894,427.5532 846.5314,431.4992 843.8664,432.6622 C845.1684,432.0942 843.4594,439.0232 843.3674,439.7192 C843.0034,442.4852 843.9114,445.4452 843.4324,448.1592 C843.8124,449.1142 843.6464,449.8332 842.9364,450.3172 C842.4524,450.7092 842.0994,451.2052 841.8794,451.8042 C841.8454,453.7392 842.4124,452.5992 842.4394,453.2672 C842.7074,459.9232 841.5824,466.8232 842.0634,473.6412 C842.5724,480.8482 844.1814,487.9182 845.4034,495.0262 C846.5004,501.4062 847.6824,507.7992 848.5974,514.2082 C849.2394,518.7062 849.7154,523.8692 847.2954,527.9632 C842.7004,535.7362 829.3974,534.8912 821.6494,536.1622 C808.7714,538.2762 795.8754,540.1832 782.9504,541.9792 C777.9884,542.6682 772.9664,544.2422 767.9464,544.3212 C762.5834,544.4052 759.7134,542.2392 756.3324,538.2812 C749.5204,530.3082 745.1274,521.2522 739.4534,512.5792 C736.2664,507.7072 733.6154,506.4232 728.2504,504.9362 C723.2674,503.5552 719.2684,499.9192 715.2144,496.8952 C706.6984,490.5432 695.7014,483.6362 690.1134,474.2812 C684.2324,464.4372 692.5194,461.1692 700.4544,458.4832 C698.5234,453.3512 694.7364,449.2292 691.6164,444.8142 C688.0694,439.7942 684.8534,434.5802 681.0344,429.7492 C673.2504,419.9022 665.4754,410.1062 657.9214,400.0752 C651.4644,391.5022 644.9384,383.3812 636.6974,376.4362 C628.4204,369.4602 619.2054,363.7432 610.1164,357.9032 C605.3684,354.8522 597.0334,347.0572 591.0324,347.8542 C585.2114,348.6282 582.9094,359.4702 581.4554,364.0272 C579.7864,369.2562 579.1974,376.5472 575.3094,380.6642 C569.5954,386.7142 563.6624,377.1842 560.9354,372.7922 C555.9424,364.7472 550.8324,356.7742 545.8464,348.7222 C543.5744,345.0512 540.2924,341.5582 538.9434,337.3962 C538.927344,337.346144 538.295826,333.767435 538.933341,334.267976 L538.977052,334.307968 L538.933653,334.259943 C537.507854,332.847083 532.239845,332.553691 530.27045,332.383335 L530.0904,332.3672 C525.9464,331.9762 521.7534,332.2842 517.6214,332.6832 Z M461.9664,558.2682 C457.1934,558.2392 452.4344,558.7942 447.6834,559.1832 C443.5104,559.5242 439.6854,558.8862 435.5194,558.6352 C430.3654,558.3252 427.8164,558.8652 429.0034,564.1882 C429.8664,568.0612 430.9034,573.2202 434.8804,574.8572 C440.2524,577.0692 447.4884,576.7712 453.2124,577.6092 C457.4144,578.2242 461.6054,578.7792 465.7894,579.4802 C468.5684,579.9462 469.9954,580.4332 471.2964,577.2842 C472.3844,574.6452 471.6834,571.1192 471.3124,568.3932 C471.0264,566.3012 471.1974,562.6222 470.2094,560.7612 C468.7344,557.9832 464.8704,558.2862 461.9664,558.2682 Z M684.4815,505.1895 C691.4935,511.5995 696.2125,519.7945 701.5075,527.5665 C704.7405,532.3115 711.0655,539.8765 706.4725,545.6295 C702.5595,550.5335 693.4605,549.4115 687.9865,549.6475 C679.3845,550.0185 672.3585,553.9055 664.1725,555.9105 C643.5555,560.9605 660.6785,526.3055 663.5345,519.0735 C665.5385,513.9995 667.6055,508.9485 670.0295,504.0575 C671.1225,501.8525 673.3035,495.4225 676.0215,494.5805 C679.9615,493.3595 681.9875,502.9095 684.4815,505.1895 Z M507.3404,432.3262 C504.0634,438.5902 503.5314,447.2602 501.9774,454.1012 C497.2284,475.0192 494.4514,496.3232 492.2684,517.6432 C503.1274,513.3362 514.5894,513.0382 526.0554,511.9842 C534.3624,511.2202 541.9904,510.3452 550.2994,510.7002 C551.7154,510.7602 555.7884,511.4792 556.9554,510.2752 C558.5224,508.6592 556.6244,504.1502 556.1614,502.4502 C553.6434,493.2172 552.5364,483.6762 549.6744,474.5002 C546.7564,465.1422 543.2094,455.7972 539.4354,446.7502 C536.6754,440.1332 532.8844,433.6802 526.1954,430.4352 C520.3394,427.5952 510.9754,425.3782 507.3404,432.3262 Z M462.6194,473.038 C467.0934,479.783 472.7604,485.683 477.1304,492.491 C480.2284,497.32 483.8564,506.252 476.4144,509.322 C473.8024,510.399 470.7184,509.933 467.9814,509.981 C463.7484,510.054 459.5564,510.418 455.3164,510.317 C451.3064,510.221 447.3344,509.735 443.3344,509.526 C440.8134,509.395 437.6464,509.589 435.4254,508.141 C429.4724,504.258 433.7774,496.329 435.6944,491.256 C437.7304,485.867 440.4794,480.771 443.1324,475.664 C444.9714,472.122 447.7214,464.905 451.9044,463.461 C456.8584,461.751 460.5554,469.927 462.6194,473.038 Z M679.5684,396.6152 C689.4014,408.0492 697.9394,420.5212 705.9794,433.2592 C709.9034,439.4752 713.7134,445.7642 717.5174,452.0542 C720.0064,456.1702 721.8754,461.4352 724.9074,465.1632 C731.8244,473.6662 733.7484,455.1132 734.7674,451.0802 C738.5284,436.2092 743.1854,421.4582 747.3284,406.6802 L743.08198,406.680368 C726.156725,406.671312 709.930169,406.420662 693.4514,401.4342 C688.7864,400.0232 684.5334,396.9602 679.5684,396.6152 Z M643.8194,399.4981 C649.1734,403.4521 683.4444,426.6671 669.0284,435.6251 C666.0454,437.4791 661.1704,436.6381 657.7994,436.9041 C653.4794,437.2451 649.0914,437.6631 644.8234,438.4281 C639.2984,439.4201 633.9304,441.1491 628.3794,442.0251 C623.9664,442.7221 618.1184,443.5351 614.1754,440.7871 C607.6714,436.2531 611.6194,427.3491 613.7664,421.5851 C616.8194,413.3951 619.7104,402.4311 627.2834,397.5531 C629.0454,396.4181 631.2044,392.3651 633.1004,391.9941 C636.0694,391.4121 641.6474,397.8951 643.8194,399.4981 Z M832.8954,206.9292 C830.3114,208.9062 830.1934,213.0122 829.5234,215.9102 C827.2694,225.6582 824.1234,235.1472 822.2564,244.9992 C820.4364,254.6082 819.8644,264.0682 820.7574,273.8062 C821.3534,280.3012 821.4224,288.2932 825.3704,293.8242 C830.0954,300.4422 839.4514,300.1032 846.5274,302.0632 C853.3354,303.9492 860.0854,309.7902 852.6594,315.8622 C850.0204,318.0192 846.5554,318.3702 843.9464,320.4482 C840.7284,323.0132 838.8804,327.6092 837.5134,331.3672 C836.3874,334.4612 836.4204,335.0522 839.7834,336.1452 C841.3194,336.6442 842.8714,336.9612 844.4874,336.8272 C848.1674,336.5212 851.4504,334.0912 854.5314,332.2652 C862.3894,327.6082 871.4654,321.3912 880.8474,320.6882 C883.8464,320.4642 887.2554,321.6912 890.1714,320.7172 C892.8884,319.8082 892.0544,319.2522 892.5264,316.7252 C894.3954,306.7092 895.1544,296.8782 900.2614,287.8172 C902.7824,283.3462 909.4464,274.2002 913.9134,281.1612 C915.7784,284.0682 916.4534,285.4882 920.5914,284.5962 C923.9584,283.8712 927.6574,281.2082 926.9894,277.3192 C926.3604,273.6502 921.5354,271.1522 918.6114,269.5442 C914.7164,267.4042 911.9854,267.6512 907.7444,267.1442 C896.0914,265.7512 904.2614,248.7082 905.9414,242.3132 C906.9974,238.2942 908.2324,233.0992 905.4604,229.4702 C901.2414,223.9502 892.0504,225.7652 886.2604,226.5482 C878.2534,227.6312 869.5124,228.2082 862.0184,224.5742 C854.0904,220.7302 850.7114,212.0602 843.2774,207.8452 C840.5304,206.2872 835.7174,204.7672 832.8954,206.9292 Z M867.6885,277.336 C873.1975,277.262 870.5195,285.117 869.0115,287.758 C865.8335,293.328 859.0265,295.482 853.0495,293.428 C848.3215,291.803 843.2075,284.625 850.6125,283.435 C854.1635,282.865 857.6785,283.097 861.0435,281.408 C862.9605,280.446 865.4385,277.366 867.6885,277.336 Z M853.8676,235.5664 C857.2906,237.6444 851.4486,250.9164 850.4646,253.6024 C848.8626,257.9864 847.4366,260.8164 851.5126,264.1954 C854.3466,266.5454 859.9366,268.5734 857.2676,273.2564 C854.7976,277.5894 846.3226,275.7724 842.8766,273.6524 C837.8676,270.5694 839.3436,264.6644 840.4486,259.8184 C841.1706,256.6434 847.7726,231.8664 853.8676,235.5664 Z M314.8694,148.4242 C325.4254,152.9332 336.2194,157.0062 347.3884,159.7232 C357.1494,162.0982 366.7474,164.6592 376.8074,164.1012 C386.1144,163.5862 387.2244,172.7292 381.9084,179.0612 C379.0204,182.5012 375.6694,182.4152 371.4604,182.5482 C366.5334,182.7042 362.0584,184.0712 357.3064,185.2952 C350.0694,187.1592 342.7424,188.7422 335.7294,191.3732 C332.1104,192.7312 328.5394,194.3282 325.3114,196.4742 C323.2824,197.8242 318.7544,200.2562 321.1494,202.1422 C324.6114,204.8672 334.8874,201.1342 339.0074,200.8882 C348.6004,200.3162 358.1744,199.4502 367.7134,198.2492 C372.3854,197.6602 377.4014,197.0782 381.8264,195.3812 C384.7214,194.2712 387.9264,191.5152 391.2044,192.2152 C398.1204,193.6922 394.6934,204.0602 391.5534,207.4332 C386.8904,212.4422 379.8114,214.6542 373.7884,217.5002 C369.5784,219.4902 365.3944,221.5972 361.3064,223.8242 C359.3754,224.8762 350.3754,228.8172 350.6604,231.8092 C350.9594,234.9542 358.0634,233.3682 359.8204,233.0822 C371.5464,231.1752 382.1274,226.6412 392.9614,222.0012 C397.7034,219.9702 402.5124,218.0212 407.1554,215.7692 C410.3984,214.1952 413.5864,211.7972 417.1694,211.0822 C425.6174,209.3952 425.2474,218.8302 428.5734,223.9272 C438.4594,239.0752 457.5604,245.5372 472.4224,254.2912 C478.0444,257.6022 483.4074,261.4152 488.5664,265.4042 C492.2514,268.2522 493.7244,272.1722 497.8394,268.4162 C501.2684,265.2852 502.9224,260.6932 505.1204,256.7112 C507.6794,252.0752 511.0974,247.9822 513.7204,243.3842 C517.5964,236.5912 518.7574,230.1122 510.2454,227.6122 C501.3094,224.9882 494.2374,221.0752 486.6424,215.4922 C468.0034,201.7902 452.5374,184.2932 433.9524,170.4862 C416.7344,157.6942 398.4764,145.6902 376.8914,142.2552 C356.4334,138.9982 333.9884,139.8002 314.8694,148.4242 Z M873.2825,246.8171 C872.8455,250.5891 871.9165,258.6341 866.6765,258.9351 C860.3125,259.3001 864.5865,239.9671 868.1915,237.7911 C873.9635,234.3071 873.6525,243.6211 873.2825,246.8171 Z M814.0654,245.2772 C806.1214,245.9352 803.8574,254.6362 811.7974,257.7172 L814.0654,245.2772 Z M843.5206,237.6407 C842.5006,241.5897 842.8636,247.9267 839.6946,250.9577 C835.2276,255.2287 833.2826,248.9607 833.3156,245.3867 C833.3476,241.8517 835.0996,233.0097 839.8306,232.5437 C843.8726,232.1457 840.5086,236.8317 843.5206,237.6407 Z M929.2524,149.7822 C926.3484,155.8252 929.4704,161.7892 931.2084,167.7292 C927.6434,168.8782 922.8394,168.0092 920.6624,171.7772 C919.2904,174.1522 919.5294,177.7282 919.9404,180.3002 C920.2774,182.4102 922.0074,185.2512 920.5674,187.2092 C918.6824,189.7722 914.0034,188.5872 911.9244,191.4382 C908.7644,195.7742 910.5374,205.6782 914.9714,208.9422 C921.2034,213.5272 917.4844,202.2752 917.1034,200.2262 C916.1474,195.0932 921.4654,195.7912 925.0974,193.7182 C927.0464,192.6062 927.3944,192.3912 927.8414,190.0172 C928.2544,187.8302 928.0354,186.0952 927.5144,183.7382 C925.7464,175.7412 928.8374,177.0472 935.1904,175.2852 C940.6704,173.7642 940.2314,169.3852 938.8394,164.7822 C937.7474,161.1742 934.4924,155.2552 938.0184,152.1792 C939.4174,150.9582 941.5424,151.7302 941.8444,149.1822 C942.0484,147.4622 939.7404,144.6422 938.5284,143.6532 C934.3514,140.2432 930.9504,146.2482 929.2524,149.7822 Z"
                        id={path2}
                        fill={inkColor}
                    />
                </g>
            </g>
        );
    }
}
