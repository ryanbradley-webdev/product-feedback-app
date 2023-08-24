export const SAMPLE_FEEDBACK: Feedback[] = [
    {
      id: '1',
      title: "Add tags for solutions",
      category: "Enhancement",
      upvotes: 112,
      status: "Suggestion",
      description: "Easier to search for solutions based on a specific stack.",
      comments: [
        {
          id: '11',
          comment: "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
          user: {
            id: '1234',
            profileImg: "/image-suzanne.jpg",
            name: "Suzanne Chang",
            handle: "@upbeat1811"
          },
          replies: []
        },
        {
          id: '12',
          comment: "Please use fun, color-coded labels to easily identify them at a glance",
          user: {
            id: '3456',
            profileImg: "/image-thomas.jpg",
            name: "Thomas Hood",
            handle: "@brawnybrave"
          },
          replies: []
        }
      ]
    },
    {
      id: '2',
      title: "Add a dark theme option",
      category: "Feature",
      upvotes: 99,
      status: "Suggestion",
      description: "It would help people with light sensitivities and who prefer dark mode.",
      comments: [
        {
          id: '21',
          comment: "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
          user: {
            id: '5678',
            profileImg: "/image-elijah.jpg",
            name: "Elijah Moss",
            handle: "@hexagon.bestagon"
          },
          replies: []
        },
        {
          id: '22',
          comment: "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
          user: {
            id: '7890',
            profileImg: "/image-james.jpg",
            name: "James Skinner",
            handle: "@hummingbird1"
          },
          replies: [
            {
              id: '221',
              comment: "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
              replyTo: "@hummingbird1",
              user: {
                id: '5432',
                profileImg: "/image-anne.jpg",
                name: "Anne Valentine",
                handle: "@annev1990"
              }
            },
            {
              id: '222',
              comment: "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
              replyTo: "@annev1990",
              user: {
                id: '4567',
                profileImg: "/image-ryan.jpg",
                name: "Ryan Welles",
                handle: "@voyager.344"
              }
            }
          ]
        }
      ]
    },
    {
      id: '3',
      title: "Q&A within the challenge hubs",
      category: "Feature",
      upvotes: 65,
      status: "Suggestion",
      description: "Challenge-specific Q&A would make for easy reference.",
      comments: [
        {
          id: '31',
          comment: "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
          user: {
            id: '6789',
            profileImg: "/image-george.jpg",
            name: "George Partridge",
            handle: "@soccerviewer8"
          },
          replies: []
        }
      ]
    },
    {
      id: '4',
      title: "Add image/video upload to feedback",
      category: "Enhancement",
      upvotes: 51,
      status: "Suggestion",
      description: "Images and screencasts can enhance comments on solutions.",
      comments: [
        { 
          id: '41',
          comment: "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
          user: {
            id: '7654',
            profileImg: "/image-javier.jpg",
            name: "Javier Pollard",
            handle: "@warlikeduke"
          },
          replies: []
        },
        {
          id: '42',
          comment: "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
          user: {
            id: '8765',
            profileImg: "/image-roxanne.jpg",
            name: "Roxanne Travis",
            handle: "@peppersprime32"
          },
          replies: []
        }
      ]
    },
    {
      id: '5',
      title: "Ability to follow others",
      category: "Feature",
      upvotes: 42,
      status: "Suggestion",
      description: "Stay updated on comments and solutions other people post.",
      comments: [
        {
          id: '51',
          comment: "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
          user: {
            id: '2345',
            profileImg: "/image-victoria.jpg",
            name: "Victoria Mejia",
            handle: "@arlen_the_marlin"
          },
          replies: [
            {
              id: '511',
              comment: "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
              replyTo: "@arlen_the_marlin",
              user: {
                id: '6543',
                profileImg: "/image-zena.jpg",
                name: "Zena Kelley",
                handle: "@velvetround"
              }
            }
          ]
        },
        {
          id: '52',
          comment: "I've been saving the profile URLs of a few people and I check what they've been doing from time to time. Being able to follow them solves that",
          user: {
            id: '4321',
            profileImg: "/image-jackson.jpg",
            name: "Jackson Barker",
            handle: "@countryspirit"
          },
          replies: []
        }
      ]
    },
    {
      id: '6',
      title: "Preview images not loading",
      category: "Bug",
      upvotes: 3,
      status: "Suggestion",
      description: "Challenge preview images are missing when you apply a filter.",
      comments: []
    },
    {
      id: '7',
      title: "More comprehensive reports",
      category: "Feature",
      upvotes: 123,
      status: "Planned",
      description: "It would be great to see a more detailed breakdown of solutions.",
      comments: [
        {
          id: '71',
          comment: "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
          user: {
            id: '2345',
            profileImg: "/image-victoria.jpg",
            name: "Victoria Mejia",
            handle: "@arlen_the_marlin"
          },
          replies: []
        },
        {
          id: '72',
          comment: "Yeah, this would be really good. I'd love to see deeper insights into my code!",
          user: {
            id: '4321',
            profileImg: "/image-jackson.jpg",
            name: "Jackson Barker",
            handle: "@countryspirit"
          },
          replies: []
        }
      ]
    },
    {
      id: '8',
      title: "Learning paths",
      category: "Feature",
      upvotes: 28,
      status: "Planned",
      description: "Sequenced projects for different goals to help people improve.",
      comments: [
        {
          id: '81',
          comment: "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
          user: {
            id: '6789',
            profileImg: "/image-george.jpg",
            name: "George Partridge",
            handle: "@soccerviewer8"
          },
          replies: []
        }
      ]
    },
    {
      id: '9',
      title: "One-click portfolio generation",
      category: "Feature",
      upvotes: 62,
      status: "In-Progress",
      description: "Add ability to create professional looking portfolio from profile.",
      comments: [
        {
          id: '91',
          comment: "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
          user: {
            id: '4567',
            profileImg: "/image-ryan.jpg",
            name: "Ryan Welles",
            handle: "@voyager.344"
          },
          replies: []
        }
      ]
    },
    {
      id: '10',
      title: "Bookmark challenges",
      category: "Feature",
      upvotes: 31,
      status: "In-Progress",
      description: "Be able to bookmark challenges to take later on.",
      comments: [
        {
          id: '101',
          comment: "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
          user: {
            id: '1234',
            profileImg: "/image-suzanne.jpg",
            name: "Suzanne Chang",
            handle: "@upbeat1811"
          },
          replies: []
        }
      ]
    },
    {
      id: '11',
      title: "Animated solution screenshots",
      category: "Bug",
      upvotes: 9,
      status: "In-Progress",
      description: "Screenshots of solutions with animations don't display correctly.",
      comments: []
    },
    {
      id: '12',
      title: "Add micro-interactions",
      category: "Enhancement",
      upvotes: 71,
      status: "Live",
      description: "Small animations at specific points can add delight.",
      comments: [
        {
          id: '121',
          comment: "I'd love to see this! It always makes me so happy to see little details like these on websites.",
          user: {
            id: '2345',
            profileImg: "/image-victoria.jpg",
            name: "Victoria Mejia",
            handle: "@arlen_the_marlin"
          },
          replies: [
            {
              id: '1211',
              comment: "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
              replyTo: "@arlen_the_marlin",
              user: {
                id: '1234',
                profileImg: "/image-suzanne.jpg",
                name: "Suzanne Chang",
                handle: "@upbeat1811"
              }
            }
          ]
        }
      ]
    }
  ]