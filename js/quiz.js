$('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    allowIncorrect: true, 
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': 'What is the most important part of the computer?',
        'options': [
          'Screen',
          'Internet',
          'MotherBoard'
        ],
        'correctIndex': 2,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': 'What does CPU stand for?',
        'options': [
          'Contrast Power Usage',
          'Central Processing Unit',
          'Computer Programing Utilities'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct! Well the other two are mainly for the whole of the computer.',
        'incorrectResponse': 'Come on, it\'s not that hard!'
      },
      {
        'q': 'What is another name for a video card?',
        'options': [
          'Graphics Card',
          'Display Card',
          'All of the above'
        ],
        'correctIndex': 2,
        'correctResponse': 'You\'re a genius! This tricks so many people out.',
        'incorrectResponse': 'Well you are kind of right, but you would only get 50% of a mark for that question.'
      },
      {
        'q': 'What year was the hard drive introduced?',
        'options': [
          '1956',
          '1965',
          '1974'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct! You are a true historian for computers.',
        'incorrectResponse': 'Wrong! Someone needs to take more history lessons.'
      },
      {
        'q': 'What type of circuitry does the ram use?',
        'options': [
          'Multiplexing and Demultiplexing',
          'Dulplex',
          'Simplex'
        ],
        'correctIndex': 0,
        'correctResponse': 'Choose the longest answer, good tactic!',
        'incorrectResponse': 'Well, at least you tried.'
      },
      {
        'q': 'What statement describes peripherals?',
        'options': [
          'An ancillary device used to put information into and get information out of the computer?',
          'Files that you create on the computer and store on the hard drive',
          'The paper and ink that you put into the printer'
        ],
        'correctIndex': 0,
        'correctResponse': 'Well done!',
        'incorrectResponse': 'No worrries, theres still more questions which you can get right!'
      },
      {
        'q': 'What type of machines used to help people in the early mechanical tools?',
        'options': [
          'Calculating Machines',
          'Time Machines',
          'Printing Machines'
        ],
        'correctIndex': 0,
        'correctResponse': 'Who would know that calculators are the grandfathers of all computers?',
        'incorrectResponse': 'Please dont tell me you clicked, "Time Machines"?'
      },
      {
        'q': 'True or False "+Most video cards are not limited to simple display output?',
        'options': [
          'True',
          'False',
          'Not Mentioned'
        ],
        'correctIndex': 2,
        'correctResponse': 'Good memory!',
        'incorrectResponse': 'Actually it was not mentioned.'
      },
      {
        'q': 'Who invented the Hard drive?',
        'options': [
          'IMB',
          'CIA',
          'BBC'
        ],
        'correctIndex': 0,
        'correctResponse': 'Who ever gets this false is clearly joking.',
        'incorrectResponse': 'Because of course a kids channel and a high officers like the CIA created a storage device.'
      },
      {
        'q': 'What does CSS stand for',
        'options': [
          'Central Storage System',
          'Cascading Style Sheet',
          'Campion Sport Session'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good, but do you know what it does?',
        'incorrectResponse': 'Why would a sport answer be in a website about computers.'
      },
      {
        'q': 'What is another name for hardware components of a computer?',
        'options': [
          'Hardware Components, Duh!',
          'Peripherals',
          'Input and Output Devices'
        ],
        'correctIndex': 1,
        'correctResponse': 'Well it was one of the titles so everyone should get that right.',
        'incorrectResponse': 'This was a hard question.'
      },
      {
        'q': 'What does the CPU and CU distinguish in a computer',
        'options': [
          'I/O circuitry',
          'Main Memory',
          'All of the above'
        ],
        'correctIndex': 1,
        'correctResponse': 'Technically every answer is right.',
        'incorrectResponse': 'Well only 1/2 a mark for you.'
      },
      {
        'q': 'What does GPU stand for?',
        'options': [
          'Graphics Power Utilities',
          'Graphics Processing Unit',
          'General Pressure Unit'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job!',
        'incorrectResponse': 'It is a hard question so its ok that you got it wrong'
      },
      {
        'q': 'How fast can ROM be moddified?',
        'options': [
          'Slowly',
          'Not at all',
          'All of the above'
        ],
        'correctIndex': 1,
        'correctResponse': 'Well, slowly and not at all are very similar so well done for spotting that out!',
        'incorrectResponse': 'Only 1/2 a mark.'
      },
      {
        'q': 'What was SSD similar to?',
        'options': [
          'Memory Sticks',
          'CD',
          'Graphics Card'
        ],
        'correctIndex': 1,
        'correctResponse': 'Well done on remembering that SSD is for storage.',
        'incorrectResponse': 'First of all you needed to know what SSD stands for and thats Secondary Storage Device.'
      },
      {
        'q': 'why were computers more common in the 1990s and 2000s?',
        'options': [
          'Because they were like future tech to the people then',
          'because the cost of computers were so low',
          'because computers were the best thing you could own at the time'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, if only apple was back then selling stuff then we would all have the latest iphone.',
        'incorrectResponse': 'Sorry to tell you this but computers were very low in price back then.'
      },
      {
        'q': 'True or False "A Graphics Card is an expansion card which generates a feed of output images to a display"?',
        'options': [
          'True',
          'False',
          'Not Mentioned'
        ],
        'correctIndex': 0,
        'correctResponse': 'Someone has a good memory!.',
        'incorrectResponse': 'Better luck next time.'
      },
      {
        'q': 'What does NAS stand for?',
        'options': [
          'Never Awake Storage',
          'Network Attached Storage',
          'Network Attached Script'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job! now what does NASA stand for?.',
        'incorrectResponse': 'The two answers were so similar, so i can see how you got that wrong'
      },
      {
        'q': 'What does ROM stand for?',
        'options': [
          'Registered Oppointed Memory',
          'Read Only Memory',
          'Random Ordinary Memory'
        ],
        'correctIndex': 1,
        'correctResponse': 'if you know what RAM means then you should know this.',
        'incorrectResponse': 'They do all sound correct but it was Read Only Memory'
      },
      {
        'q': 'What would you rate this site?',
        'options': [
          'Amazing!',
          'Eh, is was ok...',
          'Terrible.'
        ],
        'correctIndex': 0,
        'correctResponse': 'Thank you, your too kind.',
        'incorrectResponse': 'Close this down...and never come back...'
      }
    ]
  });