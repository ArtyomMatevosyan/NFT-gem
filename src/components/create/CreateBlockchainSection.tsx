const CreateBlockchainSection = () => {
  return (
    <div className="create__container__blockchainSection">
      <p>Blockchain</p>
      <select name="crypto" id="crypto">
        <option value="ethereum">Ethereum</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="litecoin">Litecoin</option>
      </select>
    </div>
  );
};

export default CreateBlockchainSection;
