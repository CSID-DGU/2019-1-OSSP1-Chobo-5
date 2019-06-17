type ProviderEntity = {
  label: String,
  image: String,
  value: String,
  registerLink: String,
  description: String
};

export default class Provider {
  /*
   *  List of providers.
   */
  static getIdentityProviders(): Array<ProviderEntity> {
    return [
      {
        label: "Inrupt",
        image: "/img/inrupt.svg",
        value: "https://inrupt.net/auth",
        registerLink: "https://inrupt.net/register",
        description: "Inrupt"
      },
      {
        label: "Solid Community",
        image: "/img/Solid.png",
        value: "https://solid.community",
        registerLink: "https://solid.community/register",
        description: "Solid Community"
      }
    ];
  }
}
