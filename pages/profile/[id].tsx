import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AvatarWrapper, Text } from "../../styled/Home";
import {
  DoctorImageContainer,
  Layout,
  ProfileSummary,
  Stars,
  PaddingLeft,
  SectionUnderLine,
  TextLarge,
  RatingWrapper,
  InformationCard,
  ProfileInformation,
  LinkButton,
  DescriptionLight,
  Description,
  TextGroup,
  Marker,
  TextLight,
  AvatarThumbnail,
  UserInfo,
  FlexStart,
  Comment,
  Button,
} from "../../styled/Profile";

const comments = [
  {
    id: 1,
    name: "John Doe",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "",
    comment:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae semper nisl. Sed euismod, nisl sit amet aliquam consectetur, nisl nisl aliquam nisl, sit amet aliquam nisl",
  },
];

type Item = {
  Id: number;
  Title: string;
  Type: string;
};

type Section = {
  EmptySectionText: string;
  Id: number;
  Items: [Item];
  ViewTitle: string;
  Type: string;
};

type ProfileType = {
  Id: number;
  UserName: string;
  FirstName: string;
  FirstName_ar: string;
  LastName: string;
  LastName_ar: string;
  ProfilePic: string;
  SpecialtyTitle_en: string;
  SpecialtyTitle_ar: string;
  CountryName_en: string;
  Rating: number;
  Sections: [Section];
};

function Profile({
  profile,
  Items,
  Languages,
}: {
  profile: ProfileType;
  Items: [Item];
  Languages: string;
}) {
  console.log({ profile });
  const { Sections: sections } = profile;
  const [shown, setShown] = useState(1);
  const { locale } = useRouter();
  const isEnglish = locale === "en";

  return (
    <main>
      <Layout>
        <ProfileSummary>
          <DoctorImageContainer>
            <AvatarWrapper>
              {profile.ProfilePic ? (
                <Image
                  src={`https://s3-eu-west-1.amazonaws.com/curaapps/${profile.ProfilePic}`}
                  width={200}
                  height={200}
                  alt='avatar'
                />
              ) : (
                <Image
                  src='/avatar.png'
                  width={200}
                  height={200}
                  alt='avatar'
                />
              )}
            </AvatarWrapper>
          </DoctorImageContainer>
          <PaddingLeft>
            <SectionUnderLine>
              <TextLarge>
                {isEnglish
                  ? profile.FirstName + " " + profile.LastName
                  : profile.FirstName_ar + " " + profile.LastName_ar}
              </TextLarge>
              <Description>
                {isEnglish
                  ? profile.SpecialtyTitle_en
                  : profile.SpecialtyTitle_ar}
              </Description>
              <RatingWrapper>
                <Stars>
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index.toString()}
                      width='21'
                      height='21'
                      viewBox='0 0 21 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M10.5 3C8.8032 3 8.64278 5.95544 7.63259 6.99965C6.6224 8.04385 3.48183 6.84993 3.04549 8.70336C2.61006 10.5577 5.43529 11.1869 5.78364 12.7779C6.13381 14.3688 4.40769 16.6041 5.88264 17.7165C7.35759 18.828 8.94529 16.3123 10.5 16.3123C12.0547 16.3123 13.6424 18.828 15.1173 17.7165C16.5923 16.6041 14.8671 14.3688 15.2164 12.7779C15.5656 11.1869 18.3899 10.5577 17.9545 8.70336C17.5191 6.84993 14.3776 8.04385 13.3683 6.99965C12.3581 5.95544 12.1968 3 10.5 3Z'
                        fill='#FFC224'
                      ></path>
                    </svg>
                  ))}
                </Stars>
                <TextLight>
                  {profile.Rating} {isEnglish ? "Reviews" : "مراجعة"}
                </TextLight>
              </RatingWrapper>
            </SectionUnderLine>
            <TextGroup>
              <Text>Job </Text>
              {Items.length < 1 && (
                <DescriptionLight>No job Enterd</DescriptionLight>
              )}
              {Items.map((item: Item) => (
                <DescriptionLight key={item.Id}>{item.Title}</DescriptionLight>
              ))}
            </TextGroup>
            <TextGroup>
              <Text>{isEnglish ? "Country" : "البلد"}</Text>
              {profile.CountryName_en.length < 1 && (
                <DescriptionLight>
                  {isEnglish ? "No Country Enterd" : "لم يتم إدخال البلد"}
                </DescriptionLight>
              )}
              <DescriptionLight>{profile.CountryName_en}</DescriptionLight>
            </TextGroup>
            <TextGroup>
              <Text>{isEnglish ? "Languages" : "اللغات"}</Text>
              {Languages.length < 1 && (
                <DescriptionLight>
                  {isEnglish ? "No Languages Enterd" : "لم يتم إدخال اللغات"}
                </DescriptionLight>
              )}

              <DescriptionLight>{Languages}</DescriptionLight>
            </TextGroup>
            <LinkButton>
              <Link href='#'>{isEnglish ? "Consult" : "استشارة"}</Link>
              <Image
                src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMzQgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sZWZ0LWFycm93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImxlZnQtYXJyb3ciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwb2x5Z29uIGlkPSJkYXNkc2Fkc2EiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIyMi41OTQ5NDg3IDIgMjEuMzkyMzk0MSAzLjIxNzk4NTUzIDI2Ljc0NDI4NjMgOC42Mzg2MjQxIDMgOC42Mzg2MjQxIDMgMTAuMzYxMzc1OSAyNi43NDQyODYzIDEwLjM2MTM3NTkgMjEuMzkyMzk0MSAxNS43ODIwMTQ1IDIyLjU5NDk0ODcgMTcgMzAgOS41Ij48L3BvbHlnb24+CiAgICA8L2c+Cjwvc3ZnPg=='
                width={25}
                height={25}
                alt='arrow'
              />
            </LinkButton>
          </PaddingLeft>
        </ProfileSummary>

        <ProfileInformation>
          <PaddingLeft>
            <h1>{isEnglish ? "information" : "معلومات"}</h1>
          </PaddingLeft>
          {sections.map((section: Section, index: number) => (
            <InformationCard key={index.toString()}>
              <Text>{section.ViewTitle}</Text>
              {section.Items.length < 1 && (
                <DescriptionLight>{section.EmptySectionText}</DescriptionLight>
              )}

              <ul>
                {section.Items.map(
                  (item: Item) =>
                    item.Title && (
                      <li key={item.Id}>
                        <Marker />
                        <DescriptionLight>{item.Title}</DescriptionLight>
                      </li>
                    ),
                )}
              </ul>
            </InformationCard>
          ))}
          <PaddingLeft>
            <h1>{isEnglish ? "Reviews" : "مراجعات"}</h1>
          </PaddingLeft>
          {[...Array(shown)].map((_, index) => (
            <InformationCard key={index.toString()}>
              <FlexStart>
                <UserInfo>
                  <AvatarThumbnail>
                    <Image
                      src={"/avatar.png"}
                      width={50}
                      height={50}
                      alt='user'
                    />
                  </AvatarThumbnail>
                  <TextGroup>
                    <Text>2022</Text>
                    <TextLight>Cura User</TextLight>
                  </TextGroup>
                </UserInfo>
                <PaddingLeft>
                  <Comment>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vitae semper nisl. Sed euismod, nisl sit amet aliquam
                    consectetur, nisl nisl aliquam nisl, sit amet aliquam nisl
                  </Comment>
                </PaddingLeft>
              </FlexStart>
            </InformationCard>
          ))}
          {shown < comments.length && (
            <Button onClick={() => setShown(shown + 1)}>
              <Text>Load more</Text>
              <Image
                src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMzQgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sZWZ0LWFycm93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImxlZnQtYXJyb3ciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwb2x5Z29uIGlkPSJkYXNkc2Fkc2EiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIyMi41OTQ5NDg3IDIgMjEuMzkyMzk0MSAzLjIxNzk4NTUzIDI2Ljc0NDI4NjMgOC42Mzg2MjQxIDMgOC42Mzg2MjQxIDMgMTAuMzYxMzc1OSAyNi43NDQyODYzIDEwLjM2MTM3NTkgMjEuMzkyMzk0MSAxNS43ODIwMTQ1IDIyLjU5NDk0ODcgMTcgMzAgOS41Ij48L3BvbHlnb24+CiAgICA8L2c+Cjwvc3ZnPg=='
                width={25}
                height={25}
                alt='arrow'
              />
            </Button>
          )}
        </ProfileInformation>
      </Layout>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://api-dev.cura.healthcare/DoctorsListings/",
  );
  const data = await response.json();
  const paths = data.Result.map((doctor: Item) => ({
    params: { id: doctor.Id.toString() },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const response = await fetch(
      `https://api-dev.cura.healthcare/DoctorProfileAnonymous/${params!.id}`,
    );

    const data = await response.json();
    const { Items } = data.Result.Sections.filter(
      (section: Section) => section.Type === "Jobs",
    )[0];
    const sections = data.Result.Sections.filter(
      (section: Section) =>
        ![
          "Jobs",
          "MyServices",
          "MediaIntro",
          "UsecasesDiseases",
          "UsecasesSymptomps",
          "UsecasesServices",
          "Recommendations",
          "Languages",
          "Awards",
        ].includes(section.Type),
    );

    return {
      props: {
        profile: {
          ...data.Result,
          Sections: sections,
        } as ProfileType,
        Items,
        Languages:
          data.Result.Sections.filter(
            (section: Section) => section.Type === "Languages",
          )[0]
            ?.Items.map((item: Item) => item.Title)
            ?.join(", ") || [],
      },
      revalidate: 100,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export default Profile;
