export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ContactSectionContentsDynamicZoneInput: any;
  DateTime: any;
  FassadenSectionContentsDynamicZoneInput: any;
  HomeSectionContentsDynamicZoneInput: any;
  ImmobilienSectionContentsDynamicZoneInput: any;
  InnovationSectionContentsDynamicZoneInput: any;
  JSON: any;
  ProjectSectionContentsDynamicZoneInput: any;
  ReferenceSectionContentsDynamicZoneInput: any;
  TeamSectionContentsDynamicZoneInput: any;
  Upload: any;
  VermietenVerkaufenSectionContentsDynamicZoneInput: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  project?: Maybe<ProjectRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryProjectArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  project?: InputMaybe<ProjectFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  name?: InputMaybe<Scalars['String']>;
  project?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentAccordionAccordion = {
  __typename?: 'ComponentAccordionAccordion';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  layout: Enum_Componentaccordionaccordion_Layout;
  title: Scalars['String'];
};

export type ComponentAccordionAccordionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAccordionAccordionFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  layout?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAccordionAccordionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAccordionAccordionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBasicButtonLink = {
  __typename?: 'ComponentBasicButtonLink';
  id: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentBasicButtonLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBasicButtonLinkFiltersInput>>>;
  not?: InputMaybe<ComponentBasicButtonLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBasicButtonLinkFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBasicButtonLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentBasicHeroSlider = {
  __typename?: 'ComponentBasicHeroSlider';
  buttonLink?: Maybe<ComponentBasicButtonLink>;
  id: Scalars['ID'];
  image: UploadFileRelationResponseCollection;
  title?: Maybe<Scalars['String']>;
};

export type ComponentBasicHeroSliderImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBasicHeroSliderInput = {
  buttonLink?: InputMaybe<ComponentBasicButtonLinkInput>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBasicIntroContent = {
  __typename?: 'ComponentBasicIntroContent';
  content?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentBasicIntroContentInput = {
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBasicSeo = {
  __typename?: 'ComponentBasicSeo';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentBasicSeoInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBasicSlide = {
  __typename?: 'ComponentBasicSlide';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
};

export type ComponentContentAccordions = {
  __typename?: 'ComponentContentAccordions';
  accordions?: Maybe<Array<Maybe<ComponentAccordionAccordion>>>;
  id: Scalars['ID'];
};

export type ComponentContentAccordionsAccordionsArgs = {
  filters?: InputMaybe<ComponentAccordionAccordionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentContentListProject = {
  __typename?: 'ComponentContentListProject';
  category: CategoryRelationResponseCollection;
  id: Scalars['ID'];
};

export type ComponentContentListProjectCategoryArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentContentPartner = {
  __typename?: 'ComponentContentPartner';
  id: Scalars['ID'];
  partners?: Maybe<Array<Maybe<ComponentPartnerPartner>>>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentContentPartnerPartnersArgs = {
  filters?: InputMaybe<ComponentPartnerPartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentContentStory = {
  __typename?: 'ComponentContentStory';
  id: Scalars['ID'];
  stories?: Maybe<Array<Maybe<ComponentStoryStory>>>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentContentStoryStoriesArgs = {
  filters?: InputMaybe<ComponentStoryStoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentContentTextBlocks = {
  __typename?: 'ComponentContentTextBlocks';
  id: Scalars['ID'];
  textBlocks?: Maybe<Array<Maybe<ComponentTextBlockTextBlock>>>;
};

export type ComponentContentTextBlocksTextBlocksArgs = {
  filters?: InputMaybe<ComponentTextBlockTextBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentPartnerPartner = {
  __typename?: 'ComponentPartnerPartner';
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentPartnerPartnerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPartnerPartnerFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPartnerPartnerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPartnerPartnerFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentStoryStory = {
  __typename?: 'ComponentStoryStory';
  description: Scalars['String'];
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  title: Scalars['String'];
  year?: Maybe<Scalars['String']>;
};

export type ComponentStoryStoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentStoryStoryFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentStoryStoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentStoryStoryFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  year?: InputMaybe<StringFilterInput>;
};

export type ComponentTextBlockTextBlock = {
  __typename?: 'ComponentTextBlockTextBlock';
  buttonLink?: Maybe<ComponentBasicButtonLink>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  title?: Maybe<Scalars['String']>;
};

export type ComponentTextBlockTextBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTextBlockTextBlockFiltersInput>>>;
  buttonLink?: InputMaybe<ComponentBasicButtonLinkFiltersInput>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentTextBlockTextBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTextBlockTextBlockFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ContactSection = {
  __typename?: 'ContactSection';
  contents?: Maybe<Array<Maybe<ContactSectionContentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroSlider: ComponentBasicHeroSlider;
  introContent?: Maybe<ComponentBasicIntroContent>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentBasicSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactSectionContentsDynamicZone =
  | ComponentContentAccordions
  | ComponentContentTextBlocks
  | Error;

export type ContactSectionEntity = {
  __typename?: 'ContactSectionEntity';
  attributes?: Maybe<ContactSection>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactSectionEntityResponse = {
  __typename?: 'ContactSectionEntityResponse';
  data?: Maybe<ContactSectionEntity>;
};

export type ContactSectionInput = {
  contents?: InputMaybe<
    Array<Scalars['ContactSectionContentsDynamicZoneInput']>
  >;
  heroSlider?: InputMaybe<ComponentBasicHeroSliderInput>;
  introContent?: InputMaybe<ComponentBasicIntroContentInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentBasicSeoInput>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentaccordionaccordion_Layout {
  Collapse = 'Collapse',
  Grid = 'Grid',
  Markdown = 'Markdown'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type FassadenSection = {
  __typename?: 'FassadenSection';
  contents?: Maybe<Array<Maybe<FassadenSectionContentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroSlider: ComponentBasicHeroSlider;
  introContent?: Maybe<ComponentBasicIntroContent>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentBasicSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FassadenSectionContentsDynamicZone =
  | ComponentContentAccordions
  | ComponentContentTextBlocks
  | Error;

export type FassadenSectionEntity = {
  __typename?: 'FassadenSectionEntity';
  attributes?: Maybe<FassadenSection>;
  id?: Maybe<Scalars['ID']>;
};

export type FassadenSectionEntityResponse = {
  __typename?: 'FassadenSectionEntityResponse';
  data?: Maybe<FassadenSectionEntity>;
};

export type FassadenSectionInput = {
  contents?: InputMaybe<
    Array<Scalars['FassadenSectionContentsDynamicZoneInput']>
  >;
  heroSlider?: InputMaybe<ComponentBasicHeroSliderInput>;
  introContent?: InputMaybe<ComponentBasicIntroContentInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentBasicSeoInput>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Union Type of all registered slug content types */
export type FindSlugResponse = ProjectEntityResponse;

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph =
  | Category
  | ComponentAccordionAccordion
  | ComponentBasicButtonLink
  | ComponentBasicHeroSlider
  | ComponentBasicIntroContent
  | ComponentBasicSeo
  | ComponentBasicSlide
  | ComponentContentAccordions
  | ComponentContentListProject
  | ComponentContentPartner
  | ComponentContentStory
  | ComponentContentTextBlocks
  | ComponentPartnerPartner
  | ComponentStoryStory
  | ComponentTextBlockTextBlock
  | ContactSection
  | FassadenSection
  | HomeSection
  | ImmobilienSection
  | InnovationSection
  | Project
  | ProjectSection
  | ReferenceSection
  | SlugifySlug
  | Team
  | TeamSection
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | VermietenVerkaufenSection;

export type HomeSection = {
  __typename?: 'HomeSection';
  contents?: Maybe<Array<Maybe<HomeSectionContentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroSlider: ComponentBasicHeroSlider;
  introContent?: Maybe<ComponentBasicIntroContent>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentBasicSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomeSectionContentsDynamicZone =
  | ComponentContentAccordions
  | ComponentContentTextBlocks
  | Error;

export type HomeSectionEntity = {
  __typename?: 'HomeSectionEntity';
  attributes?: Maybe<HomeSection>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeSectionEntityResponse = {
  __typename?: 'HomeSectionEntityResponse';
  data?: Maybe<HomeSectionEntity>;
};

export type HomeSectionInput = {
  contents?: InputMaybe<Array<Scalars['HomeSectionContentsDynamicZoneInput']>>;
  heroSlider?: InputMaybe<ComponentBasicHeroSliderInput>;
  introContent?: InputMaybe<ComponentBasicIntroContentInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentBasicSeoInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type ImmobilienSection = {
  __typename?: 'ImmobilienSection';
  contents?: Maybe<Array<Maybe<ImmobilienSectionContentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroSlider: ComponentBasicHeroSlider;
  introContent?: Maybe<ComponentBasicIntroContent>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentBasicSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ImmobilienSectionContentsDynamicZone =
  | ComponentContentAccordions
  | ComponentContentTextBlocks
  | Error;

export type ImmobilienSectionEntity = {
  __typename?: 'ImmobilienSectionEntity';
  attributes?: Maybe<ImmobilienSection>;
  id?: Maybe<Scalars['ID']>;
};

export type ImmobilienSectionEntityResponse = {
  __typename?: 'ImmobilienSectionEntityResponse';
  data?: Maybe<ImmobilienSectionEntity>;
};

export type ImmobilienSectionInput = {
  contents?: InputMaybe<
    Array<Scalars['ImmobilienSectionContentsDynamicZoneInput']>
  >;
  heroSlider?: InputMaybe<ComponentBasicHeroSliderInput>;
  introContent?: InputMaybe<ComponentBasicIntroContentInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentBasicSeoInput>;
};

export type InnovationSection = {
  __typename?: 'InnovationSection';
  contents?: Maybe<Array<Maybe<InnovationSectionContentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroSlider: ComponentBasicHeroSlider;
  introContent: ComponentBasicIntroContent;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentBasicSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InnovationSectionContentsDynamicZone =
  | ComponentContentAccordions
  | ComponentContentTextBlocks
  | Error;

export type InnovationSectionEntity = {
  __typename?: 'InnovationSectionEntity';
  attributes?: Maybe<InnovationSection>;
  id?: Maybe<Scalars['ID']>;
};

export type InnovationSectionEntityResponse = {
  __typename?: 'InnovationSectionEntityResponse';
  data?: Maybe<InnovationSectionEntity>;
};

export type InnovationSectionInput = {
  contents?: InputMaybe<
    Array<Scalars['InnovationSectionContentsDynamicZoneInput']>
  >;
  heroSlider?: InputMaybe<ComponentBasicHeroSliderInput>;
  introContent?: InputMaybe<ComponentBasicIntroContentInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentBasicSeoInput>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createProject?: Maybe<ProjectEntityResponse>;
  createSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  createTeam?: Maybe<TeamEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteContactSection?: Maybe<ContactSectionEntityResponse>;
  deleteFassadenSection?: Maybe<FassadenSectionEntityResponse>;
  deleteHomeSection?: Maybe<HomeSectionEntityResponse>;
  deleteImmobilienSection?: Maybe<ImmobilienSectionEntityResponse>;
  deleteInnovationSection?: Maybe<InnovationSectionEntityResponse>;
  deleteProject?: Maybe<ProjectEntityResponse>;
  deleteProjectSection?: Maybe<ProjectSectionEntityResponse>;
  deleteReferenceSection?: Maybe<ReferenceSectionEntityResponse>;
  deleteSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  deleteTeam?: Maybe<TeamEntityResponse>;
  deleteTeamSection?: Maybe<TeamSectionEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVermietenVerkaufenSection?: Maybe<VermietenVerkaufenSectionEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateContactSection?: Maybe<ContactSectionEntityResponse>;
  updateFassadenSection?: Maybe<FassadenSectionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomeSection?: Maybe<HomeSectionEntityResponse>;
  updateImmobilienSection?: Maybe<ImmobilienSectionEntityResponse>;
  updateInnovationSection?: Maybe<InnovationSectionEntityResponse>;
  updateProject?: Maybe<ProjectEntityResponse>;
  updateProjectSection?: Maybe<ProjectSectionEntityResponse>;
  updateReferenceSection?: Maybe<ReferenceSectionEntityResponse>;
  updateSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  updateTeam?: Maybe<TeamEntityResponse>;
  updateTeamSection?: Maybe<TeamSectionEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVermietenVerkaufenSection?: Maybe<VermietenVerkaufenSectionEntityResponse>;
  upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};

export type MutationCreateProjectArgs = {
  data: ProjectInput;
};

export type MutationCreateSlugifySlugArgs = {
  data: SlugifySlugInput;
};

export type MutationCreateTeamArgs = {
  data: TeamInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSlugifySlugArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTeamArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};

export type MutationUpdateContactSectionArgs = {
  data: ContactSectionInput;
};

export type MutationUpdateFassadenSectionArgs = {
  data: FassadenSectionInput;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateHomeSectionArgs = {
  data: HomeSectionInput;
};

export type MutationUpdateImmobilienSectionArgs = {
  data: ImmobilienSectionInput;
};

export type MutationUpdateInnovationSectionArgs = {
  data: InnovationSectionInput;
};

export type MutationUpdateProjectArgs = {
  data: ProjectInput;
  id: Scalars['ID'];
};

export type MutationUpdateProjectSectionArgs = {
  data: ProjectSectionInput;
};

export type MutationUpdateReferenceSectionArgs = {
  data: ReferenceSectionInput;
};

export type MutationUpdateSlugifySlugArgs = {
  data: SlugifySlugInput;
  id: Scalars['ID'];
};

export type MutationUpdateTeamArgs = {
  data: TeamInput;
  id: Scalars['ID'];
};

export type MutationUpdateTeamSectionArgs = {
  data: TeamSectionInput;
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};

export type MutationUpdateVermietenVerkaufenSectionArgs = {
  data: VermietenVerkaufenSectionInput;
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Project = {
  __typename?: 'Project';
  category?: Maybe<CategoryRelationResponseCollection>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  image: UploadFileRelationResponseCollection;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCategoryArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProjectImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProjectEntity = {
  __typename?: 'ProjectEntity';
  attributes?: Maybe<Project>;
  id?: Maybe<Scalars['ID']>;
};

export type ProjectEntityResponse = {
  __typename?: 'ProjectEntityResponse';
  data?: Maybe<ProjectEntity>;
};

export type ProjectEntityResponseCollection = {
  __typename?: 'ProjectEntityResponseCollection';
  data: Array<ProjectEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProjectInput = {
  category?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ProjectRelationResponseCollection = {
  __typename?: 'ProjectRelationResponseCollection';
  data: Array<ProjectEntity>;
};

export type ProjectSection = {
  __typename?: 'ProjectSection';
  contents?: Maybe<Array<Maybe<ProjectSectionContentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroSlider: ComponentBasicHeroSlider;
  introContent?: Maybe<ComponentBasicIntroContent>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentBasicSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectSectionContentsDynamicZone =
  | ComponentContentAccordions
  | ComponentContentListProject
  | ComponentContentTextBlocks
  | Error;

export type ProjectSectionEntity = {
  __typename?: 'ProjectSectionEntity';
  attributes?: Maybe<ProjectSection>;
  id?: Maybe<Scalars['ID']>;
};

export type ProjectSectionEntityResponse = {
  __typename?: 'ProjectSectionEntityResponse';
  data?: Maybe<ProjectSectionEntity>;
};

export type ProjectSectionInput = {
  contents?: InputMaybe<
    Array<Scalars['ProjectSectionContentsDynamicZoneInput']>
  >;
  heroSlider?: InputMaybe<ComponentBasicHeroSliderInput>;
  introContent?: InputMaybe<ComponentBasicIntroContentInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentBasicSeoInput>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  contactSection?: Maybe<ContactSectionEntityResponse>;
  fassadenSection?: Maybe<FassadenSectionEntityResponse>;
  findSlug?: Maybe<FindSlugResponse>;
  homeSection?: Maybe<HomeSectionEntityResponse>;
  immobilienSection?: Maybe<ImmobilienSectionEntityResponse>;
  innovationSection?: Maybe<InnovationSectionEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  project?: Maybe<ProjectEntityResponse>;
  projectBySlug?: Maybe<ProjectEntityResponse>;
  projectSection?: Maybe<ProjectSectionEntityResponse>;
  projects?: Maybe<ProjectEntityResponseCollection>;
  referenceSection?: Maybe<ReferenceSectionEntityResponse>;
  slugifySlug?: Maybe<SlugifySlugEntityResponse>;
  slugifySlugs?: Maybe<SlugifySlugEntityResponseCollection>;
  team?: Maybe<TeamEntityResponse>;
  teamSection?: Maybe<TeamSectionEntityResponse>;
  teams?: Maybe<TeamEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  vermietenVerkaufenSection?: Maybe<VermietenVerkaufenSectionEntityResponse>;
};

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryContactSectionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryFassadenSectionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryFindSlugArgs = {
  modelName?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type QueryHomeSectionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryImmobilienSectionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryInnovationSectionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryProjectBySlugArgs = {
  slug: Scalars['String'];
};

export type QueryProjectSectionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryReferenceSectionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QuerySlugifySlugArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QuerySlugifySlugsArgs = {
  filters?: InputMaybe<SlugifySlugFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryTeamSectionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryTeamsArgs = {
  filters?: InputMaybe<TeamFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryVermietenVerkaufenSectionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type ReferenceSection = {
  __typename?: 'ReferenceSection';
  contents?: Maybe<Array<Maybe<ReferenceSectionContentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroSlider: ComponentBasicHeroSlider;
  introContent?: Maybe<ComponentBasicIntroContent>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentBasicSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReferenceSectionContentsDynamicZone =
  | ComponentContentAccordions
  | ComponentContentListProject
  | ComponentContentTextBlocks
  | Error;

export type ReferenceSectionEntity = {
  __typename?: 'ReferenceSectionEntity';
  attributes?: Maybe<ReferenceSection>;
  id?: Maybe<Scalars['ID']>;
};

export type ReferenceSectionEntityResponse = {
  __typename?: 'ReferenceSectionEntityResponse';
  data?: Maybe<ReferenceSectionEntity>;
};

export type ReferenceSectionInput = {
  contents?: InputMaybe<
    Array<Scalars['ReferenceSectionContentsDynamicZoneInput']>
  >;
  heroSlider?: InputMaybe<ComponentBasicHeroSliderInput>;
  introContent?: InputMaybe<ComponentBasicIntroContentInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentBasicSeoInput>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SlugifySlug = {
  __typename?: 'SlugifySlug';
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SlugifySlugEntity = {
  __typename?: 'SlugifySlugEntity';
  attributes?: Maybe<SlugifySlug>;
  id?: Maybe<Scalars['ID']>;
};

export type SlugifySlugEntityResponse = {
  __typename?: 'SlugifySlugEntityResponse';
  data?: Maybe<SlugifySlugEntity>;
};

export type SlugifySlugEntityResponseCollection = {
  __typename?: 'SlugifySlugEntityResponseCollection';
  data: Array<SlugifySlugEntity>;
  meta: ResponseCollectionMeta;
};

export type SlugifySlugFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  count?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SlugifySlugFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SlugifySlugInput = {
  count?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  createdAt?: Maybe<Scalars['DateTime']>;
  imageLandscape: UploadFileEntityResponse;
  imagePortrait: UploadFileEntityResponse;
  name: Scalars['String'];
  position?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamEntity = {
  __typename?: 'TeamEntity';
  attributes?: Maybe<Team>;
  id?: Maybe<Scalars['ID']>;
};

export type TeamEntityResponse = {
  __typename?: 'TeamEntityResponse';
  data?: Maybe<TeamEntity>;
};

export type TeamEntityResponseCollection = {
  __typename?: 'TeamEntityResponseCollection';
  data: Array<TeamEntity>;
  meta: ResponseCollectionMeta;
};

export type TeamFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TeamFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TeamFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TeamFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TeamInput = {
  imageLandscape?: InputMaybe<Scalars['ID']>;
  imagePortrait?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TeamSection = {
  __typename?: 'TeamSection';
  contents?: Maybe<Array<Maybe<TeamSectionContentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroSlider: ComponentBasicHeroSlider;
  introContent?: Maybe<ComponentBasicIntroContent>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentBasicSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamSectionContentsDynamicZone =
  | ComponentContentPartner
  | ComponentContentStory
  | Error;

export type TeamSectionEntity = {
  __typename?: 'TeamSectionEntity';
  attributes?: Maybe<TeamSection>;
  id?: Maybe<Scalars['ID']>;
};

export type TeamSectionEntityResponse = {
  __typename?: 'TeamSectionEntityResponse';
  data?: Maybe<TeamSectionEntity>;
};

export type TeamSectionInput = {
  contents?: InputMaybe<Array<Scalars['TeamSectionContentsDynamicZoneInput']>>;
  heroSlider?: InputMaybe<ComponentBasicHeroSliderInput>;
  introContent?: InputMaybe<ComponentBasicIntroContentInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentBasicSeoInput>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type VermietenVerkaufenSection = {
  __typename?: 'VermietenVerkaufenSection';
  contents?: Maybe<Array<Maybe<VermietenVerkaufenSectionContentsDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroSlider: ComponentBasicHeroSlider;
  introContent?: Maybe<ComponentBasicIntroContent>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentBasicSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VermietenVerkaufenSectionContentsDynamicZone =
  | ComponentContentAccordions
  | ComponentContentListProject
  | ComponentContentTextBlocks
  | Error;

export type VermietenVerkaufenSectionEntity = {
  __typename?: 'VermietenVerkaufenSectionEntity';
  attributes?: Maybe<VermietenVerkaufenSection>;
  id?: Maybe<Scalars['ID']>;
};

export type VermietenVerkaufenSectionEntityResponse = {
  __typename?: 'VermietenVerkaufenSectionEntityResponse';
  data?: Maybe<VermietenVerkaufenSectionEntity>;
};

export type VermietenVerkaufenSectionInput = {
  contents?: InputMaybe<
    Array<Scalars['VermietenVerkaufenSectionContentsDynamicZoneInput']>
  >;
  heroSlider?: InputMaybe<ComponentBasicHeroSliderInput>;
  introContent?: InputMaybe<ComponentBasicIntroContentInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentBasicSeoInput>;
};
