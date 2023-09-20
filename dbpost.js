const testNews = [
    {
      title: 'uutisen otsikko1',
      date: '12.08',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.'
    },
    {
      title: 'uutisen otsikko2',
      date: '30.07',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.'
    },
    {
      title: 'uutisen otsikko3',
      date: '02.04',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.'
    },
    {
      title: 'uutisen otsikko4',
      date: '29.02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit modi, officiis reprehenderit a veniam suscipit debitis id facilis tempore quos quod deserunt quia ducimus quae nobis quas cum ipsam.'
    }
 ];
 try {
    const insertManyResult = await collection.insertMany(recipes);
    console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
  } catch (err) {
    console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
  }