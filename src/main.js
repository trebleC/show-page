import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')


    // /**
    //  * 主键
    //  */
    // private Integer projectId;

    // /**
    //  * 发布人主键
    //  */
    // private Integer publisherId;

    // /**
    //  * 发布人名称
    //  */
    // private String publisherName;

    // /**
    //  * 发布人类别
    //  * 0：个人
    //  * 1：单位
    //  */
    // private PublisherType type;

    // /**
    //  * 项目名称
    //  */
    // @NotBlank
    // @MaxLen(value = 50, message = "项目名称长度不能超过50")
    // private String projectName;

    // /**
    //  * 所在区域
    //  * 关联表PFDEPT
    //  * 区域有：清城区、清新区、英德市、连州市、佛冈县、阳山县、连南瑶族自治县、连山壮族瑶族自治县
    //  */
    // @NotNull
    // private Integer deptId;

    // private String deptName;

    // /**
    //  * 行业领域
    //  */
    // @NotNull
    // private Integer fieldId;

    // private String fieldName;
    // /**
    //  * 需解决技术难题
    //  */
    // @NotBlank
    // @MaxLen(value = 500, message = "需解决技术难题长度不能超过500")
    // private String difficultProblem;

    // /**
    //  * 引进项目
    //  */
    // @NotBlank
    // @MaxLen(value = 50, message = "引进项目长度不能超过50")
    // private String intrProject;

    // /**
    //  * 合作形式
    //  */
    // private Cooperation[] cooperation;

    // /**
    //  * 提交时间
    //  */
    // private Date submitTime;

    // /**
    //  * 审核表主键
    //  */
    // private Integer auditId;

    // private AuditDto auditDto;

    // /**
    //  * 是否已发布
    //  * 0：已提交
    //  * 1：已发布
    //  * 2：已关闭
    //  * 3：审核不通过
    //  */
    // private AuditState state;

    // /**
    //  * 意向人数
    //  */
    // private Long intentionCount;

    // /**
    //  * 未读意向人数
    //  */
    // private Long readCount;

    // /**
    //  * 企业名称
    //  */
    // private String enterpriseName;

    // /**
    //  * 企业联系电话
    //  */
    // private String enterprisePhone;

    // /**
    //  * 企业联系人
    //  */
    // private String enterpriseUser;

    // /**
    //  * 企业电子邮箱
    //  */
    // private String enterpriseEmail;

    // /**
    //  * 企业所在区域
    //  */
    // private String enterpriseArea;

    // /**
    //  * 单位性质
    //  */
    // private PropertyState property;

    // /**
    //  * 项目周期
    //  */
    // private String cycle;

    // /**
    //  * 关闭时间
    //  */
    // private Date closeTime;

    // /**
    //  * 需求来源
    //  */
    // private DemandSource demandSource;

    // /**
    //  * 区域类型
    //  */
    // private AreaType areaType;

    // /**
    //  * 意向时间
    //  */
    // private Date registerTime;

    // /**
    //  * 企业意向人数
    //  */
    // private Long enterpriseIntentionCount;

    // /**
    //  * 企业未读意向人数
    //  */
    // private Long enterpriseReadCount;

    // /**
    //  * 个人意向人数
    //  */
    // private Long personIntentionCount;

    // /**
    //  * 个人未读意向人数
    //  */
    // private Long personReadCount;

    // /**
    //  * 意向标记
    //  */
    // private Boolean intentionFlag;

    // /**
    //  * 企业简介
    //  */
    // private String companyProfile;

    // /**
    //  * 行业领域选为其他时，该字段为必填
    //  */
    // private String otherField;

    // /**
    //  * 人才需求表的类型
    //  */
    // private TalentDemandTypeEnums talentDemandType;

    // /**
    //  * 所属类型
    //  */
    // private TalentDemandTableOfTypeEnums talentDemandTableOfType;

    // /**
    //  * 所属类型选为其他时，该字段为必填
    //  */
    // private String otherOfType;

    // /**
    //  * 企业地址
    //  */
    // private String enterpriseAddress;

    // /**
    //  * 企业联系人职务
    //  */
    // private String linkManDuties;


    // /**
    //  * 企业简介(500字内)
    //  */
    // private String entIntroduction;

    // /**
    //  * 项目需求介绍(600字内)
    //  */
    // private String projectIntroduction;

    // /**
    //  * 项目备注
    //  */
    // private String remarks;