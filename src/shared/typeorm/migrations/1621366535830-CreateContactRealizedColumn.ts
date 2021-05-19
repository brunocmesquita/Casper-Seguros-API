import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreateContactRealizedColumn1621366535830
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'contact-forms',
      new TableColumn({
        name: 'observation',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('contact-forms', 'observation');
  }
}
