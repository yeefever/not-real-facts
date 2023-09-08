
# Not Real Facts

This project generates of pseudo-random text from valid English input, intentionally introducing grammatical errors and syntactical non-intelligibility.

Behind the scenes, I curated a dataset by POS tagging nouns and adjectives, swapping grammatical tenses, order of words, and randomly inserting other words. Some manual post processing was done afterwards. 

Then, I fine-tuned the T5-small Text2Text generative model on the summarization task of taking real english and converting to horrible english.

The model does not generalize well. But this is likely due to the small size of training sample.

Front end is built in Next.js. I tried to connect an sqllite db with Prisma, a server-side database library, which failed. Instead, I hard-coded a couple examples in the examples tab to show what should've been a dynamic database. 

As loading the model into browser is very expensive, I decided to just make API calls to huggingface API instead. 

I did not have time to fix loading time for the model so give it ~10 seconds before generating anything.
