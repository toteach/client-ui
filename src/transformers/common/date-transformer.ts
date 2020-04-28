import moment, { Moment } from 'moment';

import { Transformer } from '@/transformers/transformer';

export class DateTransformer extends Transformer<Moment, string, string, Moment> {

  public locale: string;

  public moment: Moment;

  constructor(locale: string) {
    super();
    this.locale = locale;
    this.moment = moment();
    this.moment.locale(this.locale);
  }

  public send(date: Moment): string {
    return date.format();
  }

  public fetch(date: Date|string): Moment {
    return moment(date);
  }
}
