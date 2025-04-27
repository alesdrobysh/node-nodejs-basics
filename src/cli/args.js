const parseArgs = () => {
  const args = process.argv.slice(2).reduce((acc, arg, index, array) => {
    if (arg.startsWith("--")) {
      const key = arg.substring(2);
      const next = array[index + 1];
      const value = next && !next.startsWith("--") ? next : true;

      acc.push([key, value]);
    }
    return acc;
  }, []);

  console.log(args.map(([key, value]) => `${key} is ${value}`).join(", "));
};

parseArgs();
