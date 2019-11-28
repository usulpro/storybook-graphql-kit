const query = /* GraphQL */ `
  query {
    result: allFaqs {
      question {
        en
      }
      answer {
        enRaw
      }
      category
    }
  }
`;

export default query;
