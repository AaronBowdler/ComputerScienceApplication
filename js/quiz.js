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
        'correctResponse': 'Good job, that was obvious.',
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
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': 'What type of machines used to help people in the early mechanical tools?',
        'options': [
          'Calculating Machines',
          'Time Machines',
          'Printing Machines'
        ],
        'correctIndex': 0,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': 'True or False “Most video cards are not limited to simple display output?',
        'options': [
          'True',
          'False',
          'Not Mentioned'
        ],
        'correctIndex': 2,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': 'Who invented the Hard drive?',
        'options': [
          'IMB',
          'CIA',
          'BBC'
        ],
        'correctIndex': 0,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': 'What does CSS stand for',
        'options': [
          'Central Storage System',
          'Cascading Style Sheet',
          'Campion Sport Session'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': 'What is another name for hardware components of a computer?',
        'options': [
          'Hardware Components Duh!',
          'Peripherals',
          'Input and Output Devices'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': '',
        'options': [
          '',
          '',
          ''
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': '',
        'options': [
          '',
          '',
          ''
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': '',
        'options': [
          '',
          '',
          ''
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': '',
        'options': [
          '',
          '',
          ''
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': '',
        'options': [
          '',
          '',
          ''
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': 'True or False "A Graphics Card is an expansion card which generates a feed of output images to a display"',
        'options': [
          'True',
          'False',
          'Not Mentioned'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': 'What does NAS stand for?',
        'options': [
          'Never Awake Storage',
          'Network Attached Storage',
          'Network Attached Script'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': 'What does ROM stand for?',
        'options': [
          'Registered Oppointed Memory',
          'Read Only Memory',
          'Random Ordinary Memory'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      },
      {
        'q': 'What is SSD similar to?',
        'options': [
          'CD',
          'Memory Stick',
          'CSS'
        ],
        'correctIndex': 1,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your computer won\'t work'
      }
    ]
  });