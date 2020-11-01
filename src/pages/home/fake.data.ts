interface Common {
  __typename: string;
  id: string;
  name: string;
}

export interface Document extends Common {
  url: string;
}

export interface Subject extends Common {
  documents: Document[];
}

export interface Course extends Common {
  subjects: Subject[];
}

export interface Department extends Common {
  courses: Course[];
}

export type Data = {
  departments: Department[];
};

export const data: Data = {
  departments: [
    {
      __typename: "Departments",
      id: "3bf9f285-06c7-4f92-abab-432513863b4f",
      name: "Department Of Mathematics & Statistics",
      courses: [
        {
          __typename: "Courses",
          id: "88f3957b-66d1-449d-9df6-578f0843bff5",
          name: "BSc(MSCS)",
          subjects: [
            {
              __typename: "Subjects",
              id: "c4525508-eaf1-46a0-8af5-8cf558f8dd8e",
              name: "Mathematics I",
              documents: [
                {
                  __typename: "Documents",
                  id: "5e33f790-af7b-4522-8ee2-825c319f0d40",
                  name: "Mathematics I - Unit I",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "98a9f41c-6c9d-4a53-b417-837e6969cf9c",
                  name: "Mathematics I - Unit II",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "42d68b38-4d1a-4afa-9d91-64e6db83b90c",
                  name: "Mathematics I - Unit III",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "b3ff4f56-d7f3-4fe3-9cd6-6be2fff59ab0",
                  name: "Mathematics I - Unit IV",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        },
        {
          __typename: "Lorem Ipsum",
          id: "41da50c0-550b-4137-bada-e77d35b83da4",
          name: "BSc(MPCS)",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "c4525508-eaf1-46a0-8af5-8cf558f8dd8e",
              name: "Mathematics I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "5e33f790-af7b-4522-8ee2-825c319f0d40",
                  name: "Mathematics I - Unit I",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "98a9f41c-6c9d-4a53-b417-837e6969cf9c",
                  name: "Mathematics I - Unit II",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "42d68b38-4d1a-4afa-9d91-64e6db83b90c",
                  name: "Mathematics I - Unit III",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "b3ff4f56-d7f3-4fe3-9cd6-6be2fff59ab0",
                  name: "Mathematics I - Unit IV",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        },
        {
          __typename: "Lorem Ipsum",
          id: "08437799-cdbe-4568-b79c-a00565cfc0ff",
          name: "BSc(MECS)",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "c4525508-eaf1-46a0-8af5-8cf558f8dd8e",
              name: "Mathematics I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "5e33f790-af7b-4522-8ee2-825c319f0d40",
                  name: "Mathematics I - Unit I",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "98a9f41c-6c9d-4a53-b417-837e6969cf9c",
                  name: "Mathematics I - Unit II",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "42d68b38-4d1a-4afa-9d91-64e6db83b90c",
                  name: "Mathematics I - Unit III",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "b3ff4f56-d7f3-4fe3-9cd6-6be2fff59ab0",
                  name: "Mathematics I - Unit IV",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      __typename: "Lorem Ipsum",
      id: "3b6181fc-3ecf-41e5-937b-0f73c3f511e6",
      name: "Department Of Computer Science",
      courses: [
        {
          __typename: "Lorem Ipsum",
          id: "88f3957b-66d1-449d-9df6-578f0843bff5",
          name: "BSc(MSCS)",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "c4525508-eaf1-46a0-8af5-8cf558f8dd8e",
              name: "Mathematics I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "5e33f790-af7b-4522-8ee2-825c319f0d40",
                  name: "Mathematics I - Unit I",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "98a9f41c-6c9d-4a53-b417-837e6969cf9c",
                  name: "Mathematics I - Unit II",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "42d68b38-4d1a-4afa-9d91-64e6db83b90c",
                  name: "Mathematics I - Unit III",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "b3ff4f56-d7f3-4fe3-9cd6-6be2fff59ab0",
                  name: "Mathematics I - Unit IV",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        },
        {
          __typename: "Lorem Ipsum",
          id: "41da50c0-550b-4137-bada-e77d35b83da4",
          name: "BSc(MPCS)",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "c4525508-eaf1-46a0-8af5-8cf558f8dd8e",
              name: "Mathematics I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "5e33f790-af7b-4522-8ee2-825c319f0d40",
                  name: "Mathematics I - Unit I",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "98a9f41c-6c9d-4a53-b417-837e6969cf9c",
                  name: "Mathematics I - Unit II",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "42d68b38-4d1a-4afa-9d91-64e6db83b90c",
                  name: "Mathematics I - Unit III",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "b3ff4f56-d7f3-4fe3-9cd6-6be2fff59ab0",
                  name: "Mathematics I - Unit IV",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        },
        {
          __typename: "Lorem Ipsum",
          id: "08437799-cdbe-4568-b79c-a00565cfc0ff",
          name: "BSc(MECS)",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "c4525508-eaf1-46a0-8af5-8cf558f8dd8e",
              name: "Mathematics I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "5e33f790-af7b-4522-8ee2-825c319f0d40",
                  name: "Mathematics I - Unit I",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "98a9f41c-6c9d-4a53-b417-837e6969cf9c",
                  name: "Mathematics I - Unit II",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "42d68b38-4d1a-4afa-9d91-64e6db83b90c",
                  name: "Mathematics I - Unit III",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                },
                {
                  __typename: "Lorem Ipsum",
                  id: "b3ff4f56-d7f3-4fe3-9cd6-6be2fff59ab0",
                  name: "Mathematics I - Unit IV",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        },
        {
          __typename: "Lorem Ipsum",
          id: "4b11e39f-6e75-44f3-841d-4703dad927e8",
          name: "BCom (Computers)",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        },
        {
          __typename: "Lorem Ipsum",
          id: "c9a877ea-4d9c-4256-b022-1e8e270b5adb",
          name: "BCom (IT)",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      __typename: "Lorem Ipsum",
      id: "0fc8a122-d405-4a1e-a81f-cf5169de5410",
      name: "Department Of Commerce",
      courses: [
        {
          __typename: "Lorem Ipsum",
          id: "4b11e39f-6e75-44f3-841d-4703dad927e8",
          name: "BCom (Computers)",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        },
        {
          __typename: "Lorem Ipsum",
          id: "c9a877ea-4d9c-4256-b022-1e8e270b5adb",
          name: "BCom (IT)",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        },
        {
          __typename: "Lorem Ipsum",
          id: "adfa2ce4-3e24-4c89-ae55-70acef588612",
          name: "BCom (IFA)",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        },
        {
          __typename: "Lorem Ipsum",
          id: "bd9a02ca-d70c-4567-b7ea-66e5134bfb1b",
          name: "BA",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "5f9e17e5-d98a-443d-84bb-d3642fe44cd3",
              name: "English I",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "eeb5992b-7cd0-4dee-9aa8-ad9280c600d9",
              name: "English II",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "9d87f1c0-72c6-4630-9cda-a56c94fa9877",
              name: "English III",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            },
            {
              __typename: "Lorem Ipsum",
              id: "8bbd2168-a07a-474d-9621-b0567605a86f",
              name: "English IV",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      __typename: "Lorem Ipsum",
      id: "5f39ba0a-3dd8-44be-909b-6f211cc93301",
      name: "Department Of Mass Communication",
      courses: [
        {
          __typename: "Lorem Ipsum",
          id: "b7373c0b-3d7a-45db-be91-0f73638358ce",
          name: "BA(Mass Communication)",
          subjects: [
            {
              __typename: "Lorem Ipsum",
              id: "c05c7bce-6e9f-42e2-a44f-3fb5f3b8b340",
              name: "Liberal Arts",
              documents: [
                {
                  __typename: "Lorem Ipsum",
                  id: "aca389fb-bbc2-487e-8a49-d16b283cc806",
                  name: "Some English Poet's Poems..?",
                  url: "http://www.gasl.org/refbib/Jerome__3_Men.pdf"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
