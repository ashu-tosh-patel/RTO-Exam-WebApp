import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyQns from "../data/questions.json"
import './TestSet.css'

//Images
import clock from '../data/drawable/wall-clock.png'
import right from '../data/drawable/right-arrow.png'
import poor from '../data/drawable/poor.png'
import bad from '../data/drawable/bad.png'
import normal from '../data/drawable/normal.png'
import good from '../data/drawable/good.png'

const Test = () => {
    const { id } = useParams()
    var questionArray = []

    if (id == 1) {
        questionArray = [
            { qn: MyQns.ques_1, ans: MyQns.ans_1, options: [MyQns.ans_1, MyQns.ans_30, MyQns.ans_35, MyQns.ans_41] },
            { qn: MyQns.ques_2, ans: MyQns.ans_2, options: [MyQns.ans_2, MyQns.ans_17, MyQns.ans_13, MyQns.ans_1] },
            { qn: MyQns.ques_3, ans: MyQns.ans_3, options: [MyQns.ans_41, MyQns.ans_3, MyQns.ans_36, MyQns.ans_6] },
            { qn: MyQns.ques_4, ans: MyQns.ans_4, options: [MyQns.ans_4, MyQns.ans_28, MyQns.ans_8, MyQns.ans_30] },
            { qn: MyQns.ques_5, ans: MyQns.ans_5, options: [MyQns.ans_14, MyQns.ans_5, MyQns.ans_40, MyQns.ans_19] },
            { qn: MyQns.ques_6, ans: MyQns.ans_6, options: [MyQns.ans_10, MyQns.ans_31, MyQns.ans_6, MyQns.ans_28] },
            { qn: MyQns.ques_7, ans: MyQns.ans_7, options: [MyQns.ans_41, MyQns.ans_7, MyQns.ans_34, MyQns.ans_27] },
            { qn: MyQns.ques_8, ans: MyQns.ans_8, options: [MyQns.ans_8, MyQns.ans_30, MyQns.ans_30, MyQns.ans_13] },
            { qn: MyQns.ques_9, ans: MyQns.ans_9, options: [MyQns.ans_30, MyQns.ans_31, MyQns.ans_9, MyQns.ans_5] },
            { qn: MyQns.ques_10, ans: MyQns.ans_10, options: [MyQns.ans_6, MyQns.ans_10, MyQns.ans_26, MyQns.ans_25] },
            { qn: MyQns.ques_11, ans: MyQns.ans_11, options: [MyQns.ans_18, MyQns.ans_40, MyQns.ans_33, MyQns.ans_11] },
            { qn: MyQns.ques_12, ans: MyQns.ans_12, options: [MyQns.ans_12, MyQns.ans_3, MyQns.ans_22, MyQns.ans_26] },
            { qn: MyQns.ques_13, ans: MyQns.ans_13, options: [MyQns.ans_30, MyQns.ans_13, MyQns.ans_12, MyQns.ans_9] },
            { qn: MyQns.ques_14, ans: MyQns.ans_14, options: [MyQns.ans_14, MyQns.ans_40, MyQns.ans_4, MyQns.ans_8] },
            { qn: MyQns.ques_15, ans: MyQns.ans_15, options: [MyQns.ans_30, MyQns.ans_40, MyQns.ans_20, MyQns.ans_15] },
        ]
    } else if (id == 2) {
        questionArray = [
            { qn: MyQns.ques_16, ans: MyQns.ans_16, options: [MyQns.ans_16, MyQns.ans_45, MyQns.ans_16, MyQns.ans_40] },
            { qn: MyQns.ques_17, ans: MyQns.ans_17, options: [MyQns.ans_26, MyQns.ans_17, MyQns.ans_22, MyQns.ans_12] },
            { qn: MyQns.ques_18, ans: MyQns.ans_18, options: [MyQns.ans_18, MyQns.ans_34, MyQns.ans_36, MyQns.ans_3] },
            { qn: MyQns.ques_19, ans: MyQns.ans_19, options: [MyQns.ans_8, MyQns.ans_19, MyQns.ans_40, MyQns.ans_40] },
            { qn: MyQns.ques_20, ans: MyQns.ans_20, options: [MyQns.ans_4, MyQns.ans_20, MyQns.ans_19, MyQns.ans_30] },
            { qn: MyQns.ques_21, ans: MyQns.ans_21, options: [MyQns.ans_21, MyQns.ans_41, MyQns.ans_18, MyQns.ans_24] },
            { qn: MyQns.ques_22, ans: MyQns.ans_22, options: [MyQns.ans_22, MyQns.ans_6, MyQns.ans_40, MyQns.ans_30] },
            { qn: MyQns.ques_23, ans: MyQns.ans_23, options: [MyQns.ans_29, MyQns.ans_23, MyQns.ans_6, MyQns.ans_13] },
            { qn: MyQns.ques_24, ans: MyQns.ans_24, options: [MyQns.ans_32, MyQns.ans_17, MyQns.ans_39, MyQns.ans_24] },
            { qn: MyQns.ques_25, ans: MyQns.ans_25, options: [MyQns.ans_16, MyQns.ans_16, MyQns.ans_7, MyQns.ans_25] },
            { qn: MyQns.ques_26, ans: MyQns.ans_26, options: [MyQns.ans_39, MyQns.ans_9, MyQns.ans_21, MyQns.ans_26] },
            { qn: MyQns.ques_27, ans: MyQns.ans_27, options: [MyQns.ans_2, MyQns.ans_32, MyQns.ans_27, MyQns.ans_20] },
            { qn: MyQns.ques_28, ans: MyQns.ans_28, options: [MyQns.ans_39, MyQns.ans_28, MyQns.ans_7, MyQns.ans_15] },
            { qn: MyQns.ques_29, ans: MyQns.ans_29, options: [MyQns.ans_29, MyQns.ans_22, MyQns.ans_24, MyQns.ans_23] },
            { qn: MyQns.ques_30, ans: MyQns.ans_30, options: [MyQns.ans_27, MyQns.ans_43, MyQns.ans_30, MyQns.ans_14] },
        ]
    } else if (id == 3) {
        questionArray = [
            { qn: MyQns.ques_31, ans: MyQns.ans_31, options: [MyQns.ans_8, MyQns.ans_4, MyQns.ans_31, MyQns.ans_26] },
            { qn: MyQns.ques_32, ans: MyQns.ans_32, options: [MyQns.ans_5, MyQns.ans_32, MyQns.ans_29, MyQns.ans_44] },
            { qn: MyQns.ques_33, ans: MyQns.ans_33, options: [MyQns.ans_29, MyQns.ans_42, MyQns.ans_33, MyQns.ans_8] },
            { qn: MyQns.ques_34, ans: MyQns.ans_34, options: [MyQns.ans_3, MyQns.ans_34, MyQns.ans_20, MyQns.ans_44] },
            { qn: MyQns.ques_35, ans: MyQns.ans_35, options: [MyQns.ans_35, MyQns.ans_9, MyQns.ans_13, MyQns.ans_31] },
            { qn: MyQns.ques_36, ans: MyQns.ans_36, options: [MyQns.ans_15, MyQns.ans_13, MyQns.ans_35, MyQns.ans_36] },
            { qn: MyQns.ques_37, ans: MyQns.ans_37, options: [MyQns.ans_31, MyQns.ans_23, MyQns.ans_37, MyQns.ans_36] },
            { qn: MyQns.ques_38, ans: MyQns.ans_38, options: [MyQns.ans_38, MyQns.ans_22, MyQns.ans_44, MyQns.ans_44] },
            { qn: MyQns.ques_39, ans: MyQns.ans_39, options: [MyQns.ans_8, MyQns.ans_39, MyQns.ans_3, MyQns.ans_42] },
            { qn: MyQns.ques_40, ans: MyQns.ans_40, options: [MyQns.ans_22, MyQns.ans_33, MyQns.ans_20, MyQns.ans_40] },
            { qn: MyQns.ques_41, ans: MyQns.ans_41, options: [MyQns.ans_32, MyQns.ans_41, MyQns.ans_38, MyQns.ans_35] },
            { qn: MyQns.ques_42, ans: MyQns.ans_42, options: [MyQns.ans_34, MyQns.ans_17, MyQns.ans_42, MyQns.ans_39] },
            { qn: MyQns.ques_43, ans: MyQns.ans_43, options: [MyQns.ans_43, MyQns.ans_20, MyQns.ans_41, MyQns.ans_38] },
            { qn: MyQns.ques_44, ans: MyQns.ans_44, options: [MyQns.ans_4, MyQns.ans_22, MyQns.ans_44, MyQns.ans_43] },
            { qn: MyQns.ques_45, ans: MyQns.ans_45, options: [MyQns.ans_26, MyQns.ans_13, MyQns.ans_2, MyQns.ans_45] },
        ]
    } else if (id == 4) {
        questionArray = [
            { qn: MyQns.ques_46, ans: MyQns.ans_46, options: [MyQns.ans_51, MyQns.ans_78, MyQns.ans_46, MyQns.ans_14] },
            { qn: MyQns.ques_47, ans: MyQns.ans_47, options: [MyQns.ans_47, MyQns.ans_107, MyQns.ans_10, MyQns.ans_12] },
            { qn: MyQns.ques_48, ans: MyQns.ans_48, options: [MyQns.ans_44, MyQns.ans_135, MyQns.ans_48, MyQns.ans_31] },
            { qn: MyQns.ques_49, ans: MyQns.ans_49, options: [MyQns.ans_49, MyQns.ans_22, MyQns.ans_132, MyQns.ans_9] },
            { qn: MyQns.ques_50, ans: MyQns.ans_50, options: [MyQns.ans_35, MyQns.ans_87, MyQns.ans_64, MyQns.ans_50] },
            { qn: MyQns.ques_51, ans: MyQns.ans_51, options: [MyQns.ans_51, MyQns.ans_175, MyQns.ans_33, MyQns.ans_23] },
            { qn: MyQns.ques_52, ans: MyQns.ans_52, options: [MyQns.ans_104, MyQns.ans_52, MyQns.ans_142, MyQns.ans_18] },
            { qn: MyQns.ques_53, ans: MyQns.ans_53, options: [MyQns.ans_27, MyQns.ans_120, MyQns.ans_53, MyQns.ans_36] },
            { qn: MyQns.ques_54, ans: MyQns.ans_54, options: [MyQns.ans_30, MyQns.ans_54, MyQns.ans_86, MyQns.ans_26] },
            { qn: MyQns.ques_55, ans: MyQns.ans_55, options: [MyQns.ans_36, MyQns.ans_188, MyQns.ans_54, MyQns.ans_55] },
            { qn: MyQns.ques_56, ans: MyQns.ans_56, options: [MyQns.ans_56, MyQns.ans_76, MyQns.ans_37, MyQns.ans_19] },
            { qn: MyQns.ques_57, ans: MyQns.ans_57, options: [MyQns.ans_61, MyQns.ans_57, MyQns.ans_97, MyQns.ans_13] },
            { qn: MyQns.ques_58, ans: MyQns.ans_58, options: [MyQns.ans_48, MyQns.ans_161, MyQns.ans_58, MyQns.ans_14] },
            { qn: MyQns.ques_59, ans: MyQns.ans_59, options: [MyQns.ans_101, MyQns.ans_59, MyQns.ans_76, MyQns.ans_13] },
            { qn: MyQns.ques_60, ans: MyQns.ans_60, options: [MyQns.ans_21, MyQns.ans_64, MyQns.ans_118, MyQns.ans_60] },
        ]
    } else if (id == 5) {
        questionArray = [
            { qn: MyQns.ques_61, ans: MyQns.ans_61, options: [MyQns.ans_50, MyQns.ans_61, MyQns.ans_143, MyQns.ans_40] },
            { qn: MyQns.ques_62, ans: MyQns.ans_62, options: [MyQns.ans_100, MyQns.ans_35, MyQns.ans_105, MyQns.ans_62] },
            { qn: MyQns.ques_63, ans: MyQns.ans_63, options: [MyQns.ans_63, MyQns.ans_101, MyQns.ans_35, MyQns.ans_3] },
            { qn: MyQns.ques_64, ans: MyQns.ans_64, options: [MyQns.ans_60, MyQns.ans_22, MyQns.ans_64, MyQns.ans_40] },
            { qn: MyQns.ques_65, ans: MyQns.ans_65, options: [MyQns.ans_67, MyQns.ans_65, MyQns.ans_111, MyQns.ans_30] },
            { qn: MyQns.ques_66, ans: MyQns.ans_66, options: [MyQns.ans_37, MyQns.ans_174, MyQns.ans_100, MyQns.ans_66] },
            { qn: MyQns.ques_67, ans: MyQns.ans_67, options: [MyQns.ans_55, MyQns.ans_67, MyQns.ans_54, MyQns.ans_30] },
            { qn: MyQns.ques_68, ans: MyQns.ans_68, options: [MyQns.ans_81, MyQns.ans_197, MyQns.ans_112, MyQns.ans_68] },
            { qn: MyQns.ques_69, ans: MyQns.ans_69, options: [MyQns.ans_84, MyQns.ans_69, MyQns.ans_29, MyQns.ans_24] },
            { qn: MyQns.ques_70, ans: MyQns.ans_70, options: [MyQns.ans_90, MyQns.ans_127, MyQns.ans_70, MyQns.ans_43] },
            { qn: MyQns.ques_71, ans: MyQns.ans_71, options: [MyQns.ans_91, MyQns.ans_54, MyQns.ans_25, MyQns.ans_71] },
            { qn: MyQns.ques_72, ans: MyQns.ans_72, options: [MyQns.ans_43, MyQns.ans_72, MyQns.ans_125, MyQns.ans_20] },
            { qn: MyQns.ques_73, ans: MyQns.ans_73, options: [MyQns.ans_73, MyQns.ans_37, MyQns.ans_109, MyQns.ans_15] },
            { qn: MyQns.ques_74, ans: MyQns.ans_74, options: [MyQns.ans_105, MyQns.ans_74, MyQns.ans_17, MyQns.ans_23] },
            { qn: MyQns.ques_75, ans: MyQns.ans_75, options: [MyQns.ans_57, MyQns.ans_154, MyQns.ans_36, MyQns.ans_75] },
        ]
    } else if (id == 6) {
        questionArray = [
            { qn: MyQns.ques_76, ans: MyQns.ans_76, options: [MyQns.ans_38, MyQns.ans_49, MyQns.ans_76, MyQns.ans_26] },
            { qn: MyQns.ques_77, ans: MyQns.ans_77, options: [MyQns.ans_90, MyQns.ans_77, MyQns.ans_118, MyQns.ans_44] },
            { qn: MyQns.ques_78, ans: MyQns.ans_78, options: [MyQns.ans_81, MyQns.ans_197, MyQns.ans_78, MyQns.ans_8] },
            { qn: MyQns.ques_79, ans: MyQns.ans_79, options: [MyQns.ans_79, MyQns.ans_167, MyQns.ans_114, MyQns.ans_44] },
            { qn: MyQns.ques_80, ans: MyQns.ans_80, options: [MyQns.ans_31, MyQns.ans_120, MyQns.ans_132, MyQns.ans_80] },
            { qn: MyQns.ques_81, ans: MyQns.ans_81, options: [MyQns.ans_23, MyQns.ans_81, MyQns.ans_44, MyQns.ans_45] },
            { qn: MyQns.ques_82, ans: MyQns.ans_82, options: [MyQns.ans_82, MyQns.ans_22, MyQns.ans_30, MyQns.ans_36] },
            { qn: MyQns.ques_83, ans: MyQns.ans_83, options: [MyQns.ans_75, MyQns.ans_199, MyQns.ans_20, MyQns.ans_83] },
            { qn: MyQns.ques_84, ans: MyQns.ans_84, options: [MyQns.ans_84, MyQns.ans_185, MyQns.ans_28, MyQns.ans_42] },
            { qn: MyQns.ques_85, ans: MyQns.ans_85, options: [MyQns.ans_85, MyQns.ans_144, MyQns.ans_142, MyQns.ans_29] },
            { qn: MyQns.ques_86, ans: MyQns.ans_86, options: [MyQns.ans_95, MyQns.ans_48, MyQns.ans_86, MyQns.ans_35] },
            { qn: MyQns.ques_87, ans: MyQns.ans_87, options: [MyQns.ans_75, MyQns.ans_87, MyQns.ans_35, MyQns.ans_39] },
            { qn: MyQns.ques_88, ans: MyQns.ans_88, options: [MyQns.ans_48, MyQns.ans_29, MyQns.ans_15, MyQns.ans_88] },
            { qn: MyQns.ques_89, ans: MyQns.ans_89, options: [MyQns.ans_78, MyQns.ans_155, MyQns.ans_89, MyQns.ans_43] },
            { qn: MyQns.ques_90, ans: MyQns.ans_90, options: [MyQns.ans_34, MyQns.ans_90, MyQns.ans_5, MyQns.ans_22] },
        ]
    } else if (id == 7) {
        questionArray = [
            { qn: MyQns.ques_91, ans: MyQns.ans_91, options: [MyQns.ans_74, MyQns.ans_91, MyQns.ans_58, MyQns.ans_21] },
            { qn: MyQns.ques_92, ans: MyQns.ans_92, options: [MyQns.ans_94, MyQns.ans_45, MyQns.ans_51, MyQns.ans_91] },
            { qn: MyQns.ques_93, ans: MyQns.ans_93, options: [MyQns.ans_20, MyQns.ans_93, MyQns.ans_8, MyQns.ans_23] },
            { qn: MyQns.ques_94, ans: MyQns.ans_94, options: [MyQns.ans_94, MyQns.ans_134, MyQns.ans_81, MyQns.ans_3] },
            { qn: MyQns.ques_95, ans: MyQns.ans_95, options: [MyQns.ans_64, MyQns.ans_108, MyQns.ans_95, MyQns.ans_12] },
            { qn: MyQns.ques_96, ans: MyQns.ans_96, options: [MyQns.ans_63, MyQns.ans_117, MyQns.ans_96, MyQns.ans_29] },
            { qn: MyQns.ques_97, ans: MyQns.ans_97, options: [MyQns.ans_18, MyQns.ans_97, MyQns.ans_134, MyQns.ans_10] },
            { qn: MyQns.ques_98, ans: MyQns.ans_98, options: [MyQns.ans_38, MyQns.ans_34, MyQns.ans_120, MyQns.ans_98] },
            { qn: MyQns.ques_99, ans: MyQns.ans_99, options: [MyQns.ans_13, MyQns.ans_99, MyQns.ans_94, MyQns.ans_12] },
            { qn: MyQns.ques_100, ans: MyQns.ans_100, options: [MyQns.ans_100, MyQns.ans_116, MyQns.ans_118, MyQns.ans_44] },
            { qn: MyQns.ques_101, ans: MyQns.ans_101, options: [MyQns.ans_41, MyQns.ans_28, MyQns.ans_101, MyQns.ans_45] },
            { qn: MyQns.ques_102, ans: MyQns.ans_102, options: [MyQns.ans_33, MyQns.ans_102, MyQns.ans_53, MyQns.ans_20] },
            { qn: MyQns.ques_103, ans: MyQns.ans_103, options: [MyQns.ans_103, MyQns.ans_19, MyQns.ans_52, MyQns.ans_15] },
            { qn: MyQns.ques_104, ans: MyQns.ans_104, options: [MyQns.ans_96, MyQns.ans_104, MyQns.ans_151, MyQns.ans_11] },
            { qn: MyQns.ques_105, ans: MyQns.ans_105, options: [MyQns.ans_105, MyQns.ans_85, MyQns.ans_67, MyQns.ans_18] },
        ]
    } else if (id == 8) {
        questionArray = [
            { qn: MyQns.ques_106, ans: MyQns.ans_106, options: [MyQns.ans_108, MyQns.ans_106, MyQns.ans_17, MyQns.ans_3] },
            { qn: MyQns.ques_107, ans: MyQns.ans_107, options: [MyQns.ans_48, MyQns.ans_78, MyQns.ans_152, MyQns.ans_107] },
            { qn: MyQns.ques_108, ans: MyQns.ans_108, options: [MyQns.ans_59, MyQns.ans_108, MyQns.ans_115, MyQns.ans_40] },
            { qn: MyQns.ques_109, ans: MyQns.ans_109, options: [MyQns.ans_109, MyQns.ans_82, MyQns.ans_69, MyQns.ans_32] },
            { qn: MyQns.ques_110, ans: MyQns.ans_110, options: [MyQns.ans_38, MyQns.ans_159, MyQns.ans_110, MyQns.ans_11] },
            { qn: MyQns.ques_111, ans: MyQns.ans_111, options: [MyQns.ans_111, MyQns.ans_169, MyQns.ans_9, MyQns.ans_10] },
            { qn: MyQns.ques_112, ans: MyQns.ans_112, options: [MyQns.ans_12, MyQns.ans_145, MyQns.ans_112, MyQns.ans_41] },
            { qn: MyQns.ques_113, ans: MyQns.ans_113, options: [MyQns.ans_113, MyQns.ans_180, MyQns.ans_135, MyQns.ans_10] },
            { qn: MyQns.ques_114, ans: MyQns.ans_114, options: [MyQns.ans_83, MyQns.ans_114, MyQns.ans_14, MyQns.ans_22] },
            { qn: MyQns.ques_115, ans: MyQns.ans_115, options: [MyQns.ans_36, MyQns.ans_159, MyQns.ans_148, MyQns.ans_115] },
            { qn: MyQns.ques_116, ans: MyQns.ans_116, options: [MyQns.ans_116, MyQns.ans_61, MyQns.ans_145, MyQns.ans_23] },
            { qn: MyQns.ques_117, ans: MyQns.ans_117, options: [MyQns.ans_19, MyQns.ans_117, MyQns.ans_90, MyQns.ans_27] },
            { qn: MyQns.ques_118, ans: MyQns.ans_118, options: [MyQns.ans_36, MyQns.ans_21, MyQns.ans_124, MyQns.ans_118] },
            { qn: MyQns.ques_119, ans: MyQns.ans_119, options: [MyQns.ans_119, MyQns.ans_20, MyQns.ans_152, MyQns.ans_2] },
            { qn: MyQns.ques_120, ans: MyQns.ans_120, options: [MyQns.ans_21, MyQns.ans_199, MyQns.ans_120, MyQns.ans_31] },
        ]
    } else if (id == 9) {
        questionArray = [
            { qn: MyQns.ques_121, ans: MyQns.ans_121, options: [MyQns.ans_121, MyQns.ans_70, MyQns.ans_138, MyQns.ans_6] },
            { qn: MyQns.ques_122, ans: MyQns.ans_122, options: [MyQns.ans_51, MyQns.ans_86, MyQns.ans_122, MyQns.ans_7] },
            { qn: MyQns.ques_123, ans: MyQns.ans_123, options: [MyQns.ans_26, MyQns.ans_123, MyQns.ans_52, MyQns.ans_22] },
            { qn: MyQns.ques_124, ans: MyQns.ans_124, options: [MyQns.ans_47, MyQns.ans_24, MyQns.ans_52, MyQns.ans_124] },
            { qn: MyQns.ques_125, ans: MyQns.ans_125, options: [MyQns.ans_53, MyQns.ans_83, MyQns.ans_125, MyQns.ans_35] },
            { qn: MyQns.ques_126, ans: MyQns.ans_126, options: [MyQns.ans_126, MyQns.ans_38, MyQns.ans_54, MyQns.ans_15] },
            { qn: MyQns.ques_127, ans: MyQns.ans_127, options: [MyQns.ans_104, MyQns.ans_54, MyQns.ans_24, MyQns.ans_127] },
            { qn: MyQns.ques_128, ans: MyQns.ans_128, options: [MyQns.ans_128, MyQns.ans_92, MyQns.ans_57, MyQns.ans_4] },
            { qn: MyQns.ques_129, ans: MyQns.ans_129, options: [MyQns.ans_90, MyQns.ans_27, MyQns.ans_129, MyQns.ans_43] },
            { qn: MyQns.ques_130, ans: MyQns.ans_130, options: [MyQns.ans_42, MyQns.ans_130, MyQns.ans_129, MyQns.ans_33] },
            { qn: MyQns.ques_131, ans: MyQns.ans_131, options: [MyQns.ans_66, MyQns.ans_26, MyQns.ans_49, MyQns.ans_131] },
            { qn: MyQns.ques_132, ans: MyQns.ans_132, options: [MyQns.ans_132, MyQns.ans_141, MyQns.ans_49, MyQns.ans_3] },
            { qn: MyQns.ques_133, ans: MyQns.ans_133, options: [MyQns.ans_66, MyQns.ans_61, MyQns.ans_16, MyQns.ans_133] },
            { qn: MyQns.ques_134, ans: MyQns.ans_134, options: [MyQns.ans_94, MyQns.ans_89, MyQns.ans_134, MyQns.ans_10] },
            { qn: MyQns.ques_135, ans: MyQns.ans_135, options: [MyQns.ans_135, MyQns.ans_51, MyQns.ans_131, MyQns.ans_7] },
        ]
    } else if (id == 10) {
        questionArray = [
            { qn: MyQns.ques_136, ans: MyQns.ans_136, options: [MyQns.ans_100, MyQns.ans_136, MyQns.ans_152, MyQns.ans_40] },
            { qn: MyQns.ques_137, ans: MyQns.ans_137, options: [MyQns.ans_75, MyQns.ans_137, MyQns.ans_73, MyQns.ans_41] },
            { qn: MyQns.ques_138, ans: MyQns.ans_138, options: [MyQns.ans_37, MyQns.ans_51, MyQns.ans_84, MyQns.ans_138] },
            { qn: MyQns.ques_139, ans: MyQns.ans_139, options: [MyQns.ans_139, MyQns.ans_82, MyQns.ans_79, MyQns.ans_43] },
            { qn: MyQns.ques_140, ans: MyQns.ans_140, options: [MyQns.ans_29, MyQns.ans_129, MyQns.ans_140, MyQns.ans_28] },
            { qn: MyQns.ques_141, ans: MyQns.ans_141, options: [MyQns.ans_141, MyQns.ans_30, MyQns.ans_83, MyQns.ans_45] },
            { qn: MyQns.ques_142, ans: MyQns.ans_142, options: [MyQns.ans_15, MyQns.ans_86, MyQns.ans_142, MyQns.ans_16] },
            { qn: MyQns.ques_143, ans: MyQns.ans_143, options: [MyQns.ans_143, MyQns.ans_109, MyQns.ans_135, MyQns.ans_4] },
            { qn: MyQns.ques_144, ans: MyQns.ans_144, options: [MyQns.ans_28, MyQns.ans_186, MyQns.ans_144, MyQns.ans_44] },
            { qn: MyQns.ques_145, ans: MyQns.ans_145, options: [MyQns.ans_145, MyQns.ans_206, MyQns.ans_73, MyQns.ans_39] },
            { qn: MyQns.ques_146, ans: MyQns.ans_146, options: [MyQns.ans_62, MyQns.ans_29, MyQns.ans_129, MyQns.ans_146] },
            { qn: MyQns.ques_147, ans: MyQns.ans_147, options: [MyQns.ans_75, MyQns.ans_150, MyQns.ans_147, MyQns.ans_34] },
            { qn: MyQns.ques_148, ans: MyQns.ans_148, options: [MyQns.ans_148, MyQns.ans_128, MyQns.ans_39, MyQns.ans_9] },
            { qn: MyQns.ques_149, ans: MyQns.ans_149, options: [MyQns.ans_45, MyQns.ans_76, MyQns.ans_149, MyQns.ans_34] },
            { qn: MyQns.ques_150, ans: MyQns.ans_150, options: [MyQns.ans_44, MyQns.ans_150, MyQns.ans_103, MyQns.ans_15] },
        ]
    } else if (id == 11) {
        questionArray = [
            { qn: MyQns.ques_151, ans: MyQns.ans_151, options: [MyQns.ans_26, MyQns.ans_133, MyQns.ans_77, MyQns.ans_151] },
            { qn: MyQns.ques_152, ans: MyQns.ans_152, options: [MyQns.ans_64, MyQns.ans_186, MyQns.ans_152, MyQns.ans_12] },
            { qn: MyQns.ques_153, ans: MyQns.ans_153, options: [MyQns.ans_105, MyQns.ans_153, MyQns.ans_106, MyQns.ans_26] },
            { qn: MyQns.ques_154, ans: MyQns.ans_154, options: [MyQns.ans_154, MyQns.ans_69, MyQns.ans_68, MyQns.ans_44] },
            { qn: MyQns.ques_155, ans: MyQns.ans_155, options: [MyQns.ans_24, MyQns.ans_89, MyQns.ans_155, MyQns.ans_35] },
            { qn: MyQns.ques_156, ans: MyQns.ans_156, options: [MyQns.ans_156, MyQns.ans_45, MyQns.ans_127, MyQns.ans_5] },
            { qn: MyQns.ques_157, ans: MyQns.ans_157, options: [MyQns.ans_68, MyQns.ans_101, MyQns.ans_157, MyQns.ans_12] },
            { qn: MyQns.ques_158, ans: MyQns.ans_158, options: [MyQns.ans_32, MyQns.ans_67, MyQns.ans_12, MyQns.ans_158] },
            { qn: MyQns.ques_159, ans: MyQns.ans_159, options: [MyQns.ans_159, MyQns.ans_137, MyQns.ans_15, MyQns.ans_36] },
            { qn: MyQns.ques_160, ans: MyQns.ans_160, options: [MyQns.ans_56, MyQns.ans_117, MyQns.ans_160, MyQns.ans_23] },
            { qn: MyQns.ques_161, ans: MyQns.ans_161, options: [MyQns.ans_161, MyQns.ans_165, MyQns.ans_129, MyQns.ans_42] },
            { qn: MyQns.ques_162, ans: MyQns.ans_162, options: [MyQns.ans_42, MyQns.ans_29, MyQns.ans_123, MyQns.ans_162] },
            { qn: MyQns.ques_163, ans: MyQns.ans_163, options: [MyQns.ans_83, MyQns.ans_163, MyQns.ans_75, MyQns.ans_7] },
            { qn: MyQns.ques_164, ans: MyQns.ans_164, options: [MyQns.ans_164, MyQns.ans_144, MyQns.ans_45, MyQns.ans_45] },
            { qn: MyQns.ques_165, ans: MyQns.ans_165, options: [MyQns.ans_74, MyQns.ans_165, MyQns.ans_17, MyQns.ans_7] },
        ]
    } else if (id == 12) {
        questionArray = [
            { qn: MyQns.ques_166, ans: MyQns.ans_166, options: [MyQns.ans_166, MyQns.ans_83, MyQns.ans_68, MyQns.ans_13] },
            { qn: MyQns.ques_167, ans: MyQns.ans_167, options: [MyQns.ans_85, MyQns.ans_45, MyQns.ans_97, MyQns.ans_167] },
            { qn: MyQns.ques_168, ans: MyQns.ans_168, options: [MyQns.ans_95, MyQns.ans_75, MyQns.ans_168, MyQns.ans_10] },
            { qn: MyQns.ques_169, ans: MyQns.ans_169, options: [MyQns.ans_81, MyQns.ans_137, MyQns.ans_128, MyQns.ans_169] },
            { qn: MyQns.ques_170, ans: MyQns.ans_170, options: [MyQns.ans_170, MyQns.ans_28, MyQns.ans_68, MyQns.ans_11] },
            { qn: MyQns.ques_171, ans: MyQns.ans_171, options: [MyQns.ans_86, MyQns.ans_167, MyQns.ans_171, MyQns.ans_22] },
            { qn: MyQns.ques_172, ans: MyQns.ans_172, options: [MyQns.ans_90, MyQns.ans_172, MyQns.ans_110, MyQns.ans_17] },
            { qn: MyQns.ques_173, ans: MyQns.ans_173, options: [MyQns.ans_85, MyQns.ans_30, MyQns.ans_149, MyQns.ans_173] },
            { qn: MyQns.ques_174, ans: MyQns.ans_174, options: [MyQns.ans_174, MyQns.ans_99, MyQns.ans_95, MyQns.ans_29] },
            { qn: MyQns.ques_175, ans: MyQns.ans_175, options: [MyQns.ans_99, MyQns.ans_175, MyQns.ans_42, MyQns.ans_15] },
            { qn: MyQns.ques_176, ans: MyQns.ans_176, options: [MyQns.ans_22, MyQns.ans_116, MyQns.ans_40, MyQns.ans_176] },
            { qn: MyQns.ques_177, ans: MyQns.ans_177, options: [MyQns.ans_177, MyQns.ans_162, MyQns.ans_9, MyQns.ans_14] },
            { qn: MyQns.ques_178, ans: MyQns.ans_178, options: [MyQns.ans_31, MyQns.ans_128, MyQns.ans_178, MyQns.ans_2] },
            { qn: MyQns.ques_179, ans: MyQns.ans_179, options: [MyQns.ans_62, MyQns.ans_179, MyQns.ans_75, MyQns.ans_6] },
            { qn: MyQns.ques_180, ans: MyQns.ans_180, options: [MyQns.ans_36, MyQns.ans_62, MyQns.ans_138, MyQns.ans_180] },
        ]
    } else if (id == 13) {
        questionArray = [
            { qn: MyQns.ques_181, ans: MyQns.ans_181, options: [MyQns.ans_181, MyQns.ans_79, MyQns.ans_35, MyQns.ans_18] },
            { qn: MyQns.ques_182, ans: MyQns.ans_182, options: [MyQns.ans_11, MyQns.ans_31, MyQns.ans_182, MyQns.ans_18] },
            { qn: MyQns.ques_183, ans: MyQns.ans_183, options: [MyQns.ans_74, MyQns.ans_107, MyQns.ans_117, MyQns.ans_183] },
            { qn: MyQns.ques_184, ans: MyQns.ans_184, options: [MyQns.ans_23, MyQns.ans_56, MyQns.ans_184, MyQns.ans_30] },
            { qn: MyQns.ques_185, ans: MyQns.ans_185, options: [MyQns.ans_52, MyQns.ans_185, MyQns.ans_38, MyQns.ans_27] },
            { qn: MyQns.ques_186, ans: MyQns.ans_186, options: [MyQns.ans_43, MyQns.ans_130, MyQns.ans_34, MyQns.ans_186] },
            { qn: MyQns.ques_187, ans: MyQns.ans_187, options: [MyQns.ans_187, MyQns.ans_177, MyQns.ans_120, MyQns.ans_38] },
            { qn: MyQns.ques_188, ans: MyQns.ans_188, options: [MyQns.ans_55, MyQns.ans_109, MyQns.ans_188, MyQns.ans_19] },
            { qn: MyQns.ques_189, ans: MyQns.ans_189, options: [MyQns.ans_79, MyQns.ans_196, MyQns.ans_96, MyQns.ans_189] },
            { qn: MyQns.ques_190, ans: MyQns.ans_190, options: [MyQns.ans_35, MyQns.ans_47, MyQns.ans_190, MyQns.ans_25] },
            { qn: MyQns.ques_191, ans: MyQns.ans_191, options: [MyQns.ans_84, MyQns.ans_191, MyQns.ans_13, MyQns.ans_36] },
            { qn: MyQns.ques_192, ans: MyQns.ans_192, options: [MyQns.ans_192, MyQns.ans_167, MyQns.ans_6, MyQns.ans_27] },
            { qn: MyQns.ques_193, ans: MyQns.ans_193, options: [MyQns.ans_69, MyQns.ans_16, MyQns.ans_193, MyQns.ans_21] },
            { qn: MyQns.ques_194, ans: MyQns.ans_194, options: [MyQns.ans_194, MyQns.ans_176, MyQns.ans_89, MyQns.ans_14] },
            { qn: MyQns.ques_195, ans: MyQns.ans_195, options: [MyQns.ans_32, MyQns.ans_93, MyQns.ans_195, MyQns.ans_12] },
        ]
    };


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        if (timeLeft === 0) {
            // clearTimeout(timer);
            setTimeLeft(30)
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleOptionClick = (option) => {
        setTimeLeft(30)
        if (option === questionArray[currentQuestionIndex].ans) {
            setScore(score + 1);
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    if (currentQuestionIndex === questionArray.length) {
        return (
            <div className="result">
                <h2>प्रश्नोत्तरी पूर्ण! आपका स्कोर है {score}.</h2>
                {score < 4 && <img src={poor}></img>}
                {score < 8 && score >= 4 && <img src={bad}></img>}
                {score < 12 && score >= 8 && <img src={normal}></img>}
                {score >= 12 && <img src={bad}></img>}
                <div>{(score / 15) * 100} %</div>
            </div>
        );
    }

    const currentQuestion = questionArray[currentQuestionIndex];

    return (
        <div className="quiz">
            <h2>{`प्रश्न : ${currentQuestion.qn} :-`}</h2>
            <img src={clock}></img>
            <p>शेष समय: {timeLeft} </p>
            <p>अंक : {score}</p>
            {currentQuestion.options.map((option, index) => (
                <div className="btn" key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                </div>
            ))}
            <img className="btn next" src={right} onClick={() => handleOptionClick(null)} ></img>
        </div>
    );
};

export default Test;
