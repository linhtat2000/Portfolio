dishes = [
  {
    name: 'Avocado & black bean eggs',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/avocado_blackbean_eggs-9b605bb.jpg',
    time: 'breakfast',
    serve: '2',
    prep: 5,
    cook: 5,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: 'Set yourself up for the day with this healthy veggie breakfast with eggs, avocado and black beans. It takes just 10 minutes to throw together and makes a great lunch, too',
    ingredients: `2 tsp rapeseed oil
    1 red chilli, deseeded and thinly sliced
    1 large garlic clove, sliced
    2 large eggs
    400g can black beans
    ½ x 400g can cherry tomatoes
    ¼ tsp cumin seeds
    1 small avocado, halved and sliced
    handful fresh, chopped coriander
    1 lime, cut into wedges`,
    instruction: `STEP 1
    Heat the oil in a large non-stick frying pan. Add the chilli and garlic and cook until softened and starting to colour. Break in the eggs on either side of the pan. Once they start to set, spoon the beans (with their juice) and the tomatoes around the pan and sprinkle over the cumin seeds. You’re aiming to warm the beans and tomatoes rather than cook them.
    
    STEP 2
    Remove the pan from the heat and scatter over the avocado and coriander. Squeeze over half of the lime wedges. Serve with the remaining wedges on the side for squeezing over.`,
  },
  {
    name: 'Overnight oats',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/overnight-oats-32a2747.jpg',
    time: 'breakfast',
    serve: '1',
    prep: 10,
    cook: 0,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: 'Adapt this recipe for easy overnight oats to suit your tastes. You can add dried fruit, seeds and nuts, grated apple or pear, or chopped tropical fruits - the perfect healthy breakfast.',
    ingredients: `¼ tsp ground cinnamon
    50g rolled porridge oats
    2 tbsp natural yogurt
    50g mixed berries
    drizzle of honey
    ½ tbsp nut butter (we used almond)`,
    instruction: `STEP 1
    The night before serving, stir the cinnamon and 100ml water (or milk) into your oats with a pinch of salt. 
    
    STEP 2
    The next day, loosen with a little more water (or milk) if needed. Top with the yogurt, berries, a drizzle of honey and the nut butter.`,
  },
  {
    name: 'Healthy porridge bowl',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/01/healthy-porridge-bowl-103f858.jpg',
    time: 'breakfast',
    serve: '2',
    prep: 10,
    cook: 5,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: `Start your day right with this filling bowl of oats, berries, banana and seeds. It's healthy and packed with nutrients to fuel body and mind`,
    ingredients: `100g frozen raspberries
    1 orange , ½ sliced and ½ juiced
    150g porridge oats
    100ml milk
    ½ banana , sliced
    2 tbsp smooth almond butter
    1 tbsp goji berries
    1 tbsp chia seeds`,
    instruction: `STEP 1
    Tip half the raspberries and all of the orange juice in a pan. Simmer until the raspberries soften, about 5 mins.
    
    STEP 2
    Meanwhile stir the oats, milk and 450ml water in a pan over a low heat until creamy. Top with the raspberry compote, remaining raspberries, orange slices, banana, almond butter, goji berries and chia seeds.`,
  },
  {
    name: 'Scrambled egg & feta hash',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/scrambled-eggs-d82c50e.jpg',
    time: 'breakfast',
    serve: '1',
    prep: 7,
    cook: 8,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: `This fresh, flavoursome breakfast from Joe Wicks is low in carbohydrates, high in protein and easy to make. It's quick and will keep you full 'til lunch`,
    ingredients: `2 tbsp coconut oil
    90g cherry tomatoes , halved
    4 spring onions , chopped
    60g feta , cut into small cubes
    3 eggs , beaten
    1 tsp snipped chives
    110g spinach`,
    instruction: `STEP 1
    Heat the oil in a non-stick pan on a low-medium heat. Add the tomatoes and spring onions, and cook gently for 3-4 mins until softened.
    
    STEP 2
    Add the feta and cook for 1 min to warm through, then pour in the eggs and chives. Season with pepper and keep stirring to scramble the eggs. Put a handful of the spinach on a plate and top with the eggs. Serve the rest of the spinach on the side.
    
    `,
  },
  {
    name: 'Prawn & harissa spaghetti',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn-harissa-spaghetti-d29786f.jpg',
    time: 'lunch',
    serve: '2',
    prep: 5,
    cook: 15,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: 'Try our spaghetti dinner for two, with king prawns and harissa dressing. It only takes 20 minutes to make and is healthy too – great for a midweek meal.',
    ingredients: `100g long-stem broccoli , cut into thirds
    180g dried spaghetti , regular or wholemeal
    2 tbsp olive oil
    1 large garlic clove , lightly bashed
    150g cherry tomatoes , halved
    150g raw king prawns
    1 heaped tbsp rose harissa paste
    1 lemon , finely zested`,
    instruction: `STEP 1
    Bring a pan of lightly salted water to the boil. Add the broccoli and boil for 1 min 30 secs, or until tender. Drain and set aside. Cook the pasta following pack instructions, then drain, reserving a ladleful of cooking water.
    
    STEP 2
    Heat the oil in a large frying pan, add the garlic clove and fry over a low heat for 2 mins. Remove with a slotted spoon and discard, leaving the flavoured oil.
    
    STEP 3
    Add the tomatoes to the pan and fry over a medium heat for 5 mins, or until beginning to soften and turn juicy. Stir through the prawns and cook for 2 mins, or until turning pink. Add the harissa and lemon zest, stirring to coat.
    
    STEP 4
    Toss the cooked spaghetti and pasta water through the prawns and harissa. Stir through the broccoli, season to taste and serve.`,
  },
  {
    name: 'Quick chicken hummus bowl',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/quick-chicken-and-hummus-bowl-3863168.jpg',
    time: 'lunch',
    serve: '2',
    prep: 10,
    cook: 0,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: 'Make our healthy chicken and hummus salad bowl for a delicious budget lunch option. It can be thrown together in just 10 minutes and delivers three of your 5-a-day',
    ingredients: `200g hummus
    1 small lemon , zested and juiced
    200g pouch cooked mixed grains (we used Merchant Gourmet red rice & quinoa)
    150g baby spinach , roughly chopped
    1 small avocado , halved and sliced
    1cooked chicken breast , sliced at an angle
    100g pomegranate seeds
    ½ red onion , finely sliced
    2 tbsp toasted almonds`,
    instruction: `STEP 1
    Mix 2 tbsp of the hummus with half the lemon juice, the lemon zest and enough water to make a drizzly dressing. Squeeze the grain pouch to separate the grains, then divide between two shallow bowls and toss through the dressing. Top each bowl with a handful of the spinach.
    
    STEP 2
    Squeeze the remaining lemon juice over the avocado halves, then add one half to each bowl. Divide the chicken, pomegranate seeds, onion, almonds and remaining hummus between the two bowls and gently mix everything together just before eating.`,
  },
  {
    name: 'Salmon salad with sesame dressing',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salmon-salad-440-400-67a0abd.jpg',
    time: 'lunch',
    serve: '2',
    prep: 7,
    cook: 16,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: 'Get three of your 5-a-day, plus healthy omega-3 fatty acids, vitamin C, folate and fibre in this quick, easy and low-calorie salad',
    ingredients: `For the salad
    250g new potatoes , sliced
    160g French beans , trimmed
    2 wild salmon fillets
    80g salad leaves
    4 small clementines , 3 sliced, 1 juiced
    handful of basil , chopped
    handful of coriander , chopped
    For the dressing
    2 tsp sesame oil
    2 tsp tamari
    ½ lemon , juiced
    1 red chilli , deseeded and chopped
    2 tbsp finely chopped onion (¼ small onion)`,
    instruction: `STEP 1
    Steam the potatoes and beans in a steamer basket set over a pan of boiling water for 8 mins. Arrange the salmon fillets on top and steam for a further 6-8 mins, or until the salmon flakes easily when tested with a fork.
    
    STEP 2
    Meanwhile, mix the dressing ingredients together along with the clementine juice. If eating straightaway, divide the salad leaves between two plates and top with the warm potatoes and beans and the clementine slices. Arrange the salmon fillets on top, scatter over the herbs and spoon over the dressing. If taking to work, prepare the potatoes, beans and salmon the night before, then pack into a rigid airtight container with the salad leaves kept separate. Put the salad elements together and dress just before eating to prevent the leaves from wilting.`,
  },
  {
    name: 'Chicken noodle soup',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1035613_10-0e544b7.jpg',
    time: 'lunch',
    serve: '2',
    prep: 10,
    cook: 30,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: `Mary Cadogan's aromatic broth will warm you up on a winter's evening - it contains ginger, which is particularly good for colds.`,
    ingredients: `900ml chicken or vegetable stock (or Miso soup mix)
    1 boneless, skinless chicken breast (about 175g)
    1 tsp chopped fresh ginger
    1 garlic clove, finely chopped
    50g rice or wheat noodles
    2 tbsp sweetcorn, canned or frozen
    2-3 mushrooms, thinly sliced
    2 spring onions, shredded
    2 tsp soy sauce, plus extra for serving
    mint or basil leaves and a little shredded chilli (optional), to serve`,
    instruction: `STEP 1
    Pour the stock into a pan and add the chicken breast, ginger and garlic. Bring to the boil, then reduce the heat, partly cover and simmer for 20 mins, until the chicken is tender.
    
    STEP 2
    Put the chicken on a board and shred into bite-size pieces using a couple of forks. Return the chicken to the stock with the noodles, sweetcorn, mushrooms, spring onion and soy sauce. Simmer for 3-4 mins until the noodles are tender.
    
    STEP 3
    Ladle into two bowls and scatter over the remaining spring onion, mint or basil leaves and chilli, if using. Serve with extra soy sauce.`,
  },
  {
    name: 'Avocado & black bean eggs',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/avocado_blackbean_eggs-9b605bb.jpg',
    time: 'lunch',
    serve: '2',
    prep: 5,
    cook: 5,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: 'Set yourself up for the day with this healthy veggie breakfast with eggs, avocado and black beans. It takes just 10 minutes to throw together and makes a great lunch, too',
    ingredients: `2 tsp rapeseed oil
    1 red chilli, deseeded and thinly sliced
    1 large garlic clove, sliced
    2 large eggs
    400g can black beans
    ½ x 400g can cherry tomatoes
    ¼ tsp cumin seeds
    1 small avocado, halved and sliced`,
    instruction: `STEP 1
    Heat the oil in a large non-stick frying pan. Add the chilli and garlic and cook until softened and starting to colour. Break in the eggs on either side of the pan. Once they start to set, spoon the beans (with their juice) and the tomatoes around the pan and sprinkle over the cumin seeds. You’re aiming to warm the beans and tomatoes rather than cook them.
    
    STEP 2
    Remove the pan from the heat and scatter over the avocado and coriander. Squeeze over half of the lime wedges. Serve with the remaining wedges on the side for squeezing over.`,
  },
  {
    name: 'Peanut butter rainbow rice',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Peanut-Butter-Rainbow-Rice-8072276.jpg',
    time: 'dinner',
    serve: '4',
    prep: 15,
    cook: 30,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: `Enjoy a colourful bowl of healthy goodness with chicken, rice and veg. A great family dish that's freezable, the peanut butter dressing will prove popular!`,
    ingredients: `400g skinless chicken breasts, cut into 1-inch cubes
    1 small aubergine, cut into 1-inch cubes
    1 red or orange pepper, deseeded and chopped
    195g can sweetcorn, drained
    250g rice
    For the sauce
    2 tsp sesame oil
    6 tbsp peanut butter
    2 tsp soy sauce
    2 tsp honey
    1 tsp crushed ginger
    1 tsp crushed garlic
    To serve
    sliced spring onion
    ribboned carrot
    ribboned cucumber
    sesame seeds, for sprinkling
    chopped chillies or chilli oil (for the grown-ups)`,
    instruction: `STEP 1
    Whisk together all the sauce ingredients until smooth, then season to taste. Set half aside. Add 2 tbsp cold water to the remaining half to loosen. Heat the oven to 200C/180C fan/gas 6.
    
    STEP 2
    Mix together the chicken, aubergine, pepper and sweetcorn with the thicker sauce in a roasting tin. Season, cover with foil and bake for 25-30 mins, until the chicken is cooked through and the veg is soft.
    
    STEP 3
    Meanwhile, cook the rice following pack instructions, then combine with the baked chicken and veg. Drizzle over the loosened sauce. If freezing, leave to cool completely first. Can be frozen for up to one month. Sauce can be frozen separately. Defrost thoroughly before reheating in the oven at 200C/180C fan/gas 6 for 35-40 mins. Top with the serving ingredients.`,
  },
  {
    name: 'Spiced salmon & tomato traybake',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spiced-salmon-tomato-traybake-e6664f7.jpg',
    time: 'dinner',
    serve: '2',
    prep: 5,
    cook: 25,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: 'Enjoy this healthy spiced salmon and tomato traybake with a mild curry flavour for a quick and easy midweek meal. Serve with naan bread and lemon wedges',
    ingredients: `1 red onion , sliced
    200g cherry tomatoes
    3 tbsp mild or madras curry paste
    400g can chickpeas , drained and rinsed
    2 skinless salmon fillets
    1 large or 2 small naan breads
    2 tbsp fat-free yogurt
    lemon wedges and a few coriander leaves, to serve (optional)`,
    instruction: `STEP 1
    Heat the oven to 200C/180C fan/gas 6. Toss the onion, tomatoes, 2 tbsp curry paste, the chickpeas and 200ml water together in a deep 20 x 25cm roasting tin. Roast for 15 mins until the onions are tender and the tomatoes are just bursting.
    
    STEP 2
    Stir everything, then season. Brush the remaining curry paste over the salmon fillets and season. Nestle the salmon into the veg in the tin and roast for another 8-10 mins, or until cooked to your liking.
    
    STEP 3
    Meanwhile, warm the naan breads – you can do this by putting them directly on the oven rack below the roasting tin. Cut the warmed naan breads into wedges. Swirl the yogurt into the veg in the tin, then serve with the naan wedges for dunking, a few coriander leaves sprinkled over, if you like, and the lemon wedges, if using, for squeezing over.`,
  },
  {
    name: 'Chicken & chorizo jambalaya',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1274503_8-05ae02b.jpg',
    time: 'dinner',
    serve: '4',
    prep: 10,
    cook: 45,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: 'A Cajun-inspired rice pot recipe with spicy Spanish sausage, sweet peppers and tomatoes',
    ingredients: `1 tbsp olive oil
    2 chicken breasts, chopped
    1 onion, diced
    1 red pepper, thinly sliced
    2 garlic cloves, crushed
    75g chorizo, sliced
    1 tbsp Cajun seasoning
    250g long grain rice
    400g can plum tomato
    350ml chicken stock`,
    instruction: `STEP 1
    Heat 1 tbsp olive oil in a large frying pan with a lid and brown 2 chopped chicken breasts for 5-8 mins until golden.
    
    STEP 2
    Remove and set aside. Tip in the 1 diced onion and cook for 3-4 mins until soft.
    
    STEP 3
    Add 1 thinly sliced red pepper, 2 crushed garlic cloves, 75g sliced chorizo and 1 tbsp Cajun seasoning, and cook for 5 mins more.
    
    STEP 4
    Stir the chicken back in with 250g long grain rice, add the 400g can of tomatoes and 350ml chicken stock. Cover and simmer for 20-25 mins until the rice is tender.`,
  },
  {
    name: 'Fennel-roasted cauliflower with quinoa',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Fennel-roasted-cauliflower-with-quinoa-2437e83.jpg',
    time: 'dinner',
    serve: '4',
    prep: 15,
    cook: 40,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: 'Pile this colourful vegetable quinoa salad onto a plate, top with roasted cauliflower and drizzle over the garlic yogurt for a healthy, gluten-free dinner',
    ingredients: `1 large cauliflower, or 2 small ones, separated into florets
    1 tbsp fennel seeds
    1 tsp coriander seeds
    1 tsp smoked paprika
    2 tbsp olive oil
    1 red onion, chopped
    2 peppers (mix of red, yellow or orange), chopped
    1 courgette, halved lengthways, cored and chopped
    1 small garlic clove, crushed
    1 lemon, juiced and zested
    4 tbsp yogurt
    250g quinoa, cooked
    `,
    instruction: `STEP 1
    Heat the oven to 200C/180C fan/gas 6. Bring a large pan of salted water to the boil and cook the cauliflower for 5 mins. Drain and spread out on a surface so any excess water evaporates.
    
    STEP 2
    Crush the fennel and coriander seeds using a pestle and mortar and mix with the paprika and a pinch of seasoning Put the cauliflower in a large bowl, drizzle with half the olive oil and sprinkle over the spice mix. Toss the florets to fully coat them.
    
    STEP 3
    Tip the florets onto a baking tray and space them apart. Put the red onions, peppers and courgettes on a separate baking tray, drizzle with the remaining oil, and cook both for 30-35 mins, turning halfway through so they brown all over and turn slightly crisp in places.
    
    STEP 4
    Mix the garlic with lemon juice and stir through the yogurt, adding a little extra water to loosen if needed. Stir the roasted onions, peppers and courgettes into the cooked quinoa along with the lemon zest and a pinch of salt.
    
    STEP 5
    Pile the quinoa salad onto a plate, then top with the cauliflower florets. Drizzle over the garlic yogurt.`,
  },
  {
    name: 'Miso salmon with ginger noodles',
    path: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/miso-salmon-with-gingery-vegetable-noodles-440-400-1087232.jpg',
    time: 'dinner',
    serve: '2',
    prep: 10,
    cook: 12,
    total() {
      return this.total = this.prep + this.cook;
    },
    description: `Try this healthy dinner dish of wholemeal noodles, peppers, leeks and spinach and omega-3-rich salmon fillets. It's ready in under 25 minutes`,
    ingredients: `2 nests wholemeal noodles (100g)
    1 ½ tsp brown miso
    2 tsp balsamic vinegar
    ½ tsp smoked paprika
    2 skinless wild salmon fillets (230g)
    1 tbsp rapeseed oil
    30g ginger , cut into matchsticks
    1 green pepper , deseeded and cut into strips
    2 leeks (165g), thinly sliced
    3 garlic cloves , finely grated
    160g baby spinach`,
    instruction: `STEP 1
    Put the noodles in a bowl, cover with boiling water and set aside to soften. Heat the grill to medium and place a piece of foil on the grill rack. Mix 1 tsp of the miso with the vinegar, paprika and 1 tbsp water. Spread over the salmon and grill for 6-8 mins until flaky and cooked.
    
    STEP 2
    Heat the oil in a wok and stir-fry the ginger, pepper and leeks over a high heat for a few mins until softened. Add the garlic and cook for 1 min more. Drain the noodles, reserve 2 tbsp water and mix with the remaining miso.
    
    STEP 3
    Add the drained noodles, miso liquid and spinach to the wok and toss over the heat until the spinach wilts. Pile onto plates, top with the salmon and any juices and serve.`,
  },
]